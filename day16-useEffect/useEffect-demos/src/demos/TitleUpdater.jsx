import { useState, useEffect } from "react";

function TitleUpdater() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hello, ${name}!`;
    console.log("Title changed: Hello," + name);
  }, [name]); // Re-run when name changes

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Type your name"
    />
  );
}

export default TitleUpdater;
