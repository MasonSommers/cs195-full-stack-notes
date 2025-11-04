import { useState, useEffect } from "react";

function EscapeDetector() {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setPressed(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <div>{pressed ? "✅ Escape pressed!" : "⌨️ Press Escape..."}</div>;
}

export default EscapeDetector;
