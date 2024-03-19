import React from "react";

interface ColorSwatchProps {
  color: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, className }) => {
  return (
    <div
      className={`rounded-full h-5 w-5 ${className}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorSwatch;
