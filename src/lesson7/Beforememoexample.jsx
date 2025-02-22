import React, { useState } from "react";

const Beforememoexample = () => {
  const [count, setCount] = useState(0);
  
  const [numbers] = useState([1, 2, 3, 4, 5]);

  // Function to calculate the sum (no memoization)
  const calculateSum = () => {
    console.log("Calculating sum...");
    return numbers.reduce((acc, num) => acc + num, 0);
  };

  return (
    <div>
      <h2>Without useMemo / useCallback</h2>
      <p>Sum: {calculateSum()}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Beforememoexample;
