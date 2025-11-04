function TodoInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

import { useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tasks changed:", tasks);
  }, [tasks]); // Only run when tasks array changes

  return <div>...</div>;
}
