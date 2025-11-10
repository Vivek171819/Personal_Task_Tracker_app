import React, { useEffect, useState } from "react";

export default function ProgressBar({ percent = 0 }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  // Smoothly animate whenever percent changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percent);
    }, 100);
    return () => clearTimeout(timer);
  }, [percent]);

  const safePercent = Math.min(Math.max(animatedWidth, 0), 100);

  let barColor = "#3b82f6"; // blue default
  if (safePercent >= 70) barColor = "#16a34a"; // green
  else if (safePercent >= 30) barColor = "#facc15"; // yellow
  else barColor = "#ef4444"; // red

  return (
    <div className="progress-container">
      <div
        className="progress-fill"
        style={{
          width: `${safePercent}%`,
          backgroundColor: barColor,
          transition: "width 0.5s ease-in-out, background-color 0.5s",
        }}
      ></div>
      <span className="progress-label">{safePercent}%</span>
    </div>
  );
}
