import { useState } from "react";
import BrokenTimer from "./demos/BrokenTimer";
import WorkingTimer from "./demos/WorkingTimer";
import DependencyDemo from "./demos/DependencyDemo";
import CleanupDemo from "./demos/CleanupDemo";
import "./App.css";
import Counter from "./demos/Counter";
import TitleUpdater from "./demos/TitleUpdater";
import WindowWidth from "./demos/WindowWidthDemo";
import EscapeDetector from "./demos/Exercise-EscapeDetector";

function App() {
  const [demo, setDemo] = useState("working");

  return (
    <div className="App">
      <h1>
        Day 16 <code>useEffect</code> Demos
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setDemo("counter")}>Render Cycle</button>
        <button onClick={() => setDemo("broken")}>Broken Timer</button>
        <button onClick={() => setDemo("working")}>Working Timer</button>
        <button onClick={() => setDemo("title")}>Title Updater</button>
        <button onClick={() => setDemo("window")}>WindowWidth</button>
        <button onClick={() => setDemo("dependency")}>Dependencies</button>
        <button onClick={() => setDemo("escape")}>Escape Detector</button>
        <button onClick={() => setDemo("cleanup")}>Cleanup</button>
      </div>

      <div style={{ border: "2px solid #ccc", padding: "20px" }}>
        {demo === "counter" && <Counter />}
        {demo === "title" && <TitleUpdater />}
        {demo === "broken" && <BrokenTimer />}
        {demo === "working" && <WorkingTimer />}
        {demo === "window" && <WindowWidth />}
        {demo === "dependency" && <DependencyDemo />}
        {demo === "escape" && <EscapeDetector />}
        {demo === "cleanup" && <CleanupDemo />}
      </div>
    </div>
  );
}

export default App;
