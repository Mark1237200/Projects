import React from "react";
import { Acoustic } from "./utils/Acoustic.js";

function App() {
  // const audio = new Audio();
  // console.log(audio.canPlayType("audio/mpeg")); // "maybe", "probably", or ""
  // console.log(audio.canPlayType("audio/wav")); // "maybe", "probably", or ""
  // console.log(audio.canPlayType("audio/ogg"));
  return (
    <div>
      정확도는 <Acoustic /> 입니다.
    </div>
  );
}

export default App;
