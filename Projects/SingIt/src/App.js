import React from "react";
import { analyzeAudio } from "./utils/CalculatingMFCCs.js";

function App() {
  return (
    <button
      onClick={() => analyzeAudio("./music/example.wav", "./music/example.wav")}
    >
      정확도 계산
    </button>
  );
}

export default App;
