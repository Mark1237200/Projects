import React, { useState, useRef } from "react";
import * as meyda from "meyda";

function Acoustic() {
  const audioContextRef = useRef(null);
  // const audioContext = new AudioContext();
  const [result, setResult] = useState("");
  const [mfcc1, setMFCC1] = useState(null);
  const [mfcc2, setMFCC2] = useState(null);

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

  const initAudioContext = async () => {
    try {
      // AudioContext가 이미 존재하는 경우, 반환하고 끝냅니다.
      if (audioContextRef.current) return audioContextRef.current;

      // AudioContext 생성
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();

      // AudioContext를 시작합니다.
      await audioContext.resume();

      // audioContextRef.current를 업데이트 합니다.
      audioContextRef.current = audioContext;

      return audioContext;
    } catch (error) {
      console.log("Error initializing AudioContext: ", error);
    }
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

  const handleButtonClick = () => {
    const audioContext = initAudioContext();
    fetch("music/example.wav")
      .then((response) => {
        response.arrayBuffer();
      })
      .then((arrayBuffer) => {
        console.log(arrayBuffer);
        audioContext.decodeAudioData(arrayBuffer);
      })
      .then((audioBuffer1) => {
        fetch("music/example.mp3")
          .then((response) => response.arrayBuffer())
          .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
          .then((audioBuffer2) => {
            const source1 = audioContext.createBufferSource();
            source1.buffer = audioBuffer1;
            source1.connect(audioContext.destination);

            const source2 = audioContext.createBufferSource();
            source2.buffer = audioBuffer2;
            source2.connect(audioContext.destination);

            const extractor1 = meyda.createMeydaAnalyzer({
              audioContext: audioContext,
              source: source1,
              featureExtractors: featureExtractors,
              bufferSize: frameSize,
              hopSize: hopSize,
              windowingFunction: "hanning",
            });

            const extractor2 = meyda.createMeydaAnalyzer({
              audioContext: audioContext,
              source: source2,
              featureExtractors: featureExtractors,
              bufferSize: frameSize,
              hopSize: hopSize,
              windowingFunction: "hanning",
            });

            extractor1.get("mfcc", (features) => {
              console.log("mfcc1: ", features);
              setMFCC1(features);
            });

            extractor2.get("mfcc", (features) => {
              console.log("mfcc2: ", features);
              setMFCC2(features);
            });

            extractor1.start();

            source1.start(0);
            source2.start(0);

            const calculateDistance = () => {
              if (mfcc1 && mfcc2) {
                console.log(mfcc1, mfcc2);
                setResult(
                  calculateDTWDistance(mfcc1, mfcc2, calculateMFCCDistance)
                );
              } else {
                setTimeout(calculateDistance, 100);
              }
            };
            calculateDistance();
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={handleButtonClick}>Start AudioContext</button>
      <div>정확도는 "{result}" 입니다.</div>
    </>
  );
}

export { Acoustic };
