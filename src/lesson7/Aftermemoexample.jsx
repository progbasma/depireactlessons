import React, { useState, useMemo, useCallback } from "react";

const Aftermemoexample = () => {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5]);

  // useMemo stores the sum result, so it's not recalculated on every render
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]); // Only recalculates if `numbers` changes

  // useCallback stores the function so it's not recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Function remains the same across renders

  return (
    <div>
      <h2>With useMemo and useCallback</h2>
      <p>Sum: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
};

export default Aftermemoexample;
