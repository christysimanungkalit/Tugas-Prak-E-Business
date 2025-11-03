import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <p>Jumlah klik: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={resetCount} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
