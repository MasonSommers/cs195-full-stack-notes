import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      console.log("Window resized: " + window.innerWidth);
      setWidth(window.innerWidth);
    }

    // Add listener
    window.addEventListener("resize", handleResize);

    // Cleanup: remove listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>Window width: {width}px</div>;
}
export default WindowWidth;
