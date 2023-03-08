import React, { useState, useEffect } from "react";
import * as meyda from "meyda";

function Acoustic() {
  const audioContext = new AudioContext();
  const [result, setResult] = useState("");

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

  const comparing = () => {
    fetch("music/example.mp3")
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer1) => {
        fetch("music/sample.m4a")
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
          .then((audioBuffer2) => {
            const extractor1 = meyda.createMeydaAnalyzer({
              audioContext: audioContext,
              source: audioBuffer1,
              featureExtractors: featureExtractors,
              bufferSize: frameSize,
              hopSize: hopSize,
              windowingFunction: "hann",
            });

            const mfcc1 = extractor1.get("mfcc");

            const extractor2 = meyda.createMeydaAnalyzer({
              audioContext: audioContext,
              source: audioBuffer2,
              featureExtractors: featureExtractors,
              bufferSize: frameSize,
              hopSize: hopSize,
              windowingFunction: "hann",
            });

            const mfcc2 = extractor2.get("mfcc");

            setResult(
              calculateDTWDistance(mfcc1, mfcc2, calculateMFCCDistance)
            );
          });
      });
  };
  useEffect(() => {
    comparing();
  }, []);

  return <a2>정확도는 {result} 입니다.</a2>;
}

export { Acoustic };
