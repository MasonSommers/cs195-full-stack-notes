import { useState, useEffect } from "react";

function DependencyDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs once on mount
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  // Runs when name changes
  useEffect(() => {
    console.log(`Name is now: ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Dependency Array Demo</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Open console to see logs!</p>
    </div>
  );
}

export default DependencyDemo;
