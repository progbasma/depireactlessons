import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Reduxtoolkitway() {
    const count = useSelector((state) => state.counter.count);
  
    // Get the dispatch function to dispatch actions
    const dispatch = useDispatch();

  return (
    <div>
   <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Reduxtoolkitway