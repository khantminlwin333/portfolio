import { useEffect, useState } from "react";

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  label: string;
  duration: number;
}

interface FloatingCirclesProps {
  containerWidth?: number;
  containerHeight?: number;
}

const skillsAndProjects = [
  "React",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "Three.js",
  "Portfolio",
  "Blog",
  "Chatbot",
  "API",
];

export const FloatingCircles = ({
  containerWidth = 768,
  containerHeight = 400,
}: FloatingCirclesProps) => {
  const [circles, setCircles] = useState<Circle[]>([]);

  useEffect(() => {
    const newCircles = skillsAndProjects.map((label, i) => ({
      id: i,
      x: Math.random() * containerWidth,
      y: Math.random() * containerHeight,
      size: 40 + Math.random() * 40,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      label,
      duration: 8 + Math.random() * 8,
    }));
    setCircles(newCircles);
  }, [containerWidth, containerHeight]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ width: containerWidth, height: containerHeight }}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full flex items-center justify-center text-xs font-medium opacity-70 dark:opacity-80"
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
            color: "white",
            animation: `float${circle.id} ${circle.duration}s ease-in-out infinite alternate`,
          }}
        >
          {circle.label}
          <style>{`
            @keyframes float${circle.id} {
              0% { transform: translate(0,0) scale(1); }
              50% { transform: translate(${Math.random() * 40 - 20}px, ${
            Math.random() * 40 - 20
          }px) scale(1.05); }
              100% { transform: translate(${Math.random() * 60 - 30}px, ${
            Math.random() * 60 - 30
          }px) scale(1); }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};
