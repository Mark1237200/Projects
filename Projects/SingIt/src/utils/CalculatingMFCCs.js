const audioContext = new AudioContext();
// 오디오 파일 로드 함수
async function loadAudio(url) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

// 오디오 파일에서 MFCC 계산 함수
function calculateMFCC(audioBuffer) {
  const frameSize = 2048;
  const numCoefficients = 13;
  const melFilterBank = createMelFilterBank(
    numCoefficients,
    audioContext.sampleRate,
    0,
    audioContext.sampleRate / 2,
    frameSize
  );

  const audioData = audioBuffer.getChannelData(0);
  const audioDataLength = audioData.length;
  const MFCCs = [];

  for (let i = 0; i < audioDataLength; i += frameSize) {
    const audioDataChunk = audioData.slice(i, i + frameSize);

    // Hann Window 적용
    const windowedAudioDataChunk = audioDataChunk.map((value, index) => {
      const windowCoefficient =
        0.5 * (1 - Math.cos((2 * Math.PI * index) / (frameSize - 1)));
      return value * windowCoefficient;
    });
    console.log(audioData);

    // FFT 계산
    const frequencyDomainData = new Float32Array(frameSize * 2);
    const FFT = new fft([1, 0, 1, 0]);
    FFT.forward(windowedAudioDataChunk, frequencyDomainData);

    // Mel 스케일로 변환
    const melDomainData = new Float32Array(numCoefficients);
    for (let j = 0; j < numCoefficients; j++) {
      let magnitude = 0;
      for (let k = 0; k < melFilterBank[j].length; k++) {
        magnitude += melFilterBank[j][k] * frequencyDomainData[k];
      }
      melDomainData[j] = Math.log10(magnitude);
    }

    // DCT 계산
    const MFCC = new Float32Array(numCoefficients);
    for (let j = 0; j < numCoefficients; j++) {
      let sum = 0;
      for (let k = 0; k < numCoefficients; k++) {
        sum +=
          melDomainData[k] *
          Math.cos(((Math.PI * j) / numCoefficients) * (k + 0.5));
      }
      MFCC[j] = sum;
    }

    MFCCs.push(MFCC);
  }

  return MFCCs;
}

// Mel 필터 계수 생성 함수
function createMelFilterBank(
  numFilters,
  sampleRate,
  minFreq,
  maxFreq,
  fftSize
) {
  const melFilterBank = [];

  // Mel 빈의 경계를 계산합니다.
  const melLowFreq = hertzToMel(minFreq);
  const melHighFreq = hertzToMel(maxFreq);
  const melBinWidth = (melHighFreq - melLowFreq) / (numFilters + 1);

  // 각 Mel 빈을 위한 삼각형 창을 생성합니다.
  for (let i = 0; i < numFilters; i++) {
    const currentMelCenterFreq = melLowFreq + melBinWidth * (i + 1);
    const currentCenterFreq = melToHertz(currentMelCenterFreq);
    const freqLeft =
      currentCenterFreq - melToHertz(currentMelCenterFreq - melBinWidth);
    const freqRight =
      currentCenterFreq + melToHertz(currentMelCenterFreq + melBinWidth);
    const filterBank = new Float32Array(fftSize);

    // 각 Mel 빈의 삼각형 창 계수를 계산합니다.
    for (let j = 0; j < fftSize; j++) {
      const freq = j * (sampleRate / fftSize);
      if (freq > freqLeft && freq < freqRight) {
        if (freq < currentCenterFreq) {
          filterBank[j] = (freq - freqLeft) / (currentCenterFreq - freqLeft);
        } else {
          filterBank[j] = (freqRight - freq) / (freqRight - currentCenterFreq);
        }
      }
    }

    melFilterBank.push(filterBank);
  }

  return melFilterBank;
}

// Hertz를 Mel로 변환하는 함수
function hertzToMel(frequency) {
  return 1125 * Math.log(1 + frequency / 700);
}

// Mel을 Hertz로 변환하는 함수
function melToHertz(mel) {
  return 700 * (Math.exp(mel / 1125) - 1);
}

// 두 오디오의 MFCC를 비교하여 유사도를 계산하는 함수
function compareMFCCs(mfcc1, mfcc2) {
  // 두 배열의 길이가 다르면 에러 반환
  if (mfcc1.length !== mfcc2.length) {
    throw new Error("MFCC lengths do not match");
  }

  const numFrames = mfcc1.length;
  let distance = 0;

  for (let i = 0; i < numFrames; i++) {
    const frame1 = mfcc1[i];
    const frame2 = mfcc2[i];

    // 두 프레임 간의 코사인 거리 계산
    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;
    for (let j = 0; j < frame1.length; j++) {
      dotProduct += frame1[j] * frame2[j];
      magnitude1 += frame1[j] ** 2;
      magnitude2 += frame2[j] ** 2;
    }
    const similarity =
      dotProduct / (Math.sqrt(magnitude1) * Math.sqrt(magnitude2));

    // 거리에 추가
    distance += 1 - similarity;
  }

  // 두 MFCC 배열 간의 거리 반환
  return distance / numFrames;
}

// 오디오 파일 분석 함수
async function analyzeAudio(url1, url2) {
  try {
    // 오디오 파일 로드
    const audioBuffer1 = await loadAudio(url1);
    const audioBuffer2 = await loadAudio(url2);

    // MFCC 계산
    const MFCCs1 = calculateMFCC(audioBuffer1);
    const MFCCs2 = calculateMFCC(audioBuffer2);

    // 두 MFCC 배열 간의 거리 계산
    const distance = compareMFCCs(MFCCs1, MFCCs2);

    // 유사도 출력
    const similarity = (1 - distance) * 100;
    console.log(`두 노래의 유사도는 ${similarity}% 입니다.`);
  } catch (error) {
    console.error(error);
  }
  // console.log(fft);
}

export { analyzeAudio };
