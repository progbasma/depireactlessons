import React from "react";
import useCounter from "./useCounter"; // Import the custom hook

const Counterwh = () => {
  const { count, increment, decrement, reset } = useCounter(0); // Use the hook

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
    
  );
};

export default Counterwh;
