import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';

function Reduxway() {
  const count = useSelector((state) => state.count); // Select count from state
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <div>
        
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Reduxway