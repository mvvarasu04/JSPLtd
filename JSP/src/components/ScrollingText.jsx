import { useEffect, useState } from "react";

const ScrollingText = () => {
  const [wordColors, setWordColors] = useState([]);

  const text = "Jambavan Software Solutions";
  const words = text.split(" ");

  const getRandomColor = () => {
    const colors = [
      "#ef4444", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899", "#22d3ee", "#38bdf8",
      "#1e3a8a", "#fb7185", "#64748b", "#6b7280", "#f43f5e", "#6366f1", "#14b8a6",
      "#84cc16", "#e879f9", "#06b6d4", "#a8a29e", "#000000", "#ffffff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    // Initialize with random colors
    setWordColors(words.map(() => getRandomColor()));

    const interval = setInterval(() => {
      setWordColors(words.map(() => getRandomColor()));
    }, 1000); // Change color every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div className="scroll-container whitespace-nowrap text-4xl font-bold p-2">
        {words.map((word, index) => (
          <span
            key={index}
            className="scroll-word mr-4"
            style={{ color: wordColors[index] }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
