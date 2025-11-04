import { useState, useEffect } from "react";

function CleanupDemo() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide" : "Show"} Timer
      </button>
      {showTimer && <Timer />}
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Timer started");
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup runs when component unmounts
    return () => {
      console.log("Timer stopped - cleanup ran!");
      clearInterval(interval);
    };
  }, []);

  return <p>Timer: {seconds}s</p>;
}

export default CleanupDemo;
