import * as meyda from "meyda";

const audioContext = new AudioContext();
const audioFile1 = await fetch("music/example.mp3");
const audioFile2 = await fetch("music/sample.mp3");
const audioBuffer1 = await audioContext.decodeAudioData(
  await audioFile1.arrayBuffer()
);
const audioBuffer2 = await audioContext.decodeAudioData(
  await audioFile2.arrayBuffer()
);

// const bufferLength = audioBuffer.length;
// const sampleRate = audioBuffer.sampleRate;
const frameSize = 2048;
const hopSize = 512;
const fftSize = 2048;
const melBands = 26;
const mfccs = 13;

const featureExtractors = {
  mfcc: {
    extractor: "mfcc",
    bufferSize: frameSize,
    hopSize: hopSize,
    fftSize: fftSize,
    melBands: melBands,
    mfccs: mfccs,
  },
};

const extractor1 = meyda.createMeydaAnalyzer({
  audioContext: audioContext,
  source: audioBuffer1,
  featureExtractors: featureExtractors,
  bufferSize: frameSize,
  hopSize: hopSize,
  windowingFunction: "hann",
});

const extractor2 = meyda.createMeydaAnalyzer({
  audioContext: audioContext,
  source: audioBuffer2,
  featureExtractors: featureExtractors,
  bufferSize: frameSize,
  hopSize: hopSize,
  windowingFunction: "hann",
});

const mfcc1 = await extractor1.get("mfcc");
const mfcc2 = await extractor2.get("mfcc");

function euclideanDistance(x, y) {
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    distance += Math.pow(x[i] - y[i], 2);
  }
  return Math.sqrt(distance);
}

function calculateMFCCDistance(mfcc1, mfcc2) {
  let distance = 0;
  for (let i = 0; i < mfcc1.length; i++) {
    distance += euclideanDistance(mfcc1[i], mfcc2[i]);
  }
  return distance / mfcc1.length;
}

function calculateDTWDistance(seq1, seq2, distanceFunction) {
  const DTW = [];
  const n = seq1.length;
  const m = seq2.length;
  for (let i = 0; i < n + 1; i++) {
    DTW[i] = [];
    for (let j = 0; j < m + 1; j++) {
      DTW[i][j] = Infinity;
    }
  }
  DTW[0][0] = 0;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      const cost = distanceFunction(seq1[i - 1], seq2[j - 1]);
      DTW[i][j] =
        cost + Math.min(DTW[i - 1][j], DTW[i][j - 1], DTW[i - 1][j - 1]);
    }
  }
  return DTW[n][m];
}

const result = console.log(
  calculateDTWDistance(mfcc1, mfcc2, calculateMFCCDistance)
);

export { result };
