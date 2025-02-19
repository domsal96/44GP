import React, { useState } from 'react';

function Counter() {
  // Declare the state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Increment the count value
  const increment = () => setCount(count + 1);

  // Decrement the count value, but prevent it from going below 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
