import React ,{useReducer} from 'react'

// Initial state
const initialState = { count: 0 };

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Usereducerway() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
  )
}

export default Usereducerway