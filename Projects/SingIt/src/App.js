import React from "react";
import { MFCC } from "./utils/CalculatingMFCCs.js";

function App() {
  return <button onClick={MFCC}>정확도 계산</button>;
}

export default App;
