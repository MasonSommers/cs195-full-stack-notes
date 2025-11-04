import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Component rendered!"); // Watch the console!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;
