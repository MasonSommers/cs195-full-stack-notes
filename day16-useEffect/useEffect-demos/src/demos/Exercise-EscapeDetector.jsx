import { useState, useEffect } from "react";

function EscapeDetector() {
  const [pressed, setPressed] = useState(false);

  // TODO: Add your useEffect here

  return <div>{pressed ? "✅ Escape pressed!" : "⌨️ Press Escape..."}</div>;
}
export default EscapeDetector;
