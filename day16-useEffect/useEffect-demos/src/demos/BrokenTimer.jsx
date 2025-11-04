import { useState } from "react";

function BrokenTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  console.log("🔴 Component rendered! Seconds:", seconds);

  if (running) {
    // DON'T DO THIS - infinite loop!
    setInterval(() => {
      console.log("⏰ Timer tick - trying to update state");
      setSeconds(seconds + 1);
    }, 1000);

    console.log("💥 Created ANOTHER interval! Total intervals:", seconds + 1);
  }

  return (
    <div>
      <h2>Broken Timer ❌</h2>
      <p>{seconds} seconds</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <p style={{ fontSize: "12px", color: "#EF4444" }}>
        Open console to see the chaos!
      </p>
    </div>
  );
}

export default BrokenTimer;
