import React from 'react';

export function counterReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 };
  } else if (action.type === 'DECREMENT') {
    return { count: state.count - 1 };
  } else if (action.type === 'RESET') {
    return { count: 0 };
  }

  return state;
}

function App() {
  const [counterState, countDispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  return (
    <div id='app'>
      <h1>The (Final?) Counter</h1>
      <p id='actions'>
        <button onClick={() => countDispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => countDispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
        <button onClick={() => countDispatch({ type: 'RESET' })}>Reset</button>
      </p>
      <p id='counter'>{counterState.count}</p>
    </div>
  );
}

export default App;
