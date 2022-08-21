import React, { useEffect, useState } from "react";

const unmount = () => {
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [count, setCount] = useState(false);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;
