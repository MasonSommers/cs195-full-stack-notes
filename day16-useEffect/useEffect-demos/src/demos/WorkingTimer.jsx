import { useState, useEffect } from "react";

function WorkingTimer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  console.log("✅ Component rendered! Seconds:", seconds);

  useEffect(() => {
    if (!running) return; // Don't create interval if not running

    console.log("🎯 useEffect ran - creating ONE interval");

    const interval = setInterval(() => {
      console.log("⏰ Timer tick");
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("🧹 Cleanup: stopping interval");
      clearInterval(interval);
    };
  }, [running]); // ← Re-run when running changes

  return (
    <div>
      <h2>Working Timer ✅</h2>
      <p>{seconds} seconds</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
      <p style={{ fontSize: "12px", color: "#10B981" }}>
        Check console - clean and organized!
      </p>
    </div>
  );
}

export default WorkingTimer;
