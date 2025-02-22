import React, { useState, useEffect, useLayoutEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect: Runs after paint");
  },[]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Runs before paint");
  },[]);
  

  return (
    <div>
      <h2>Check the console to see the execution order</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EffectExample;
