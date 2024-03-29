import React from "react";
import { ColorSwatchProps } from "./colorSwatch.d";

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, className }) => {
  return (
    <div
      className={`rounded-full h-5 w-5 ${className}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorSwatch;
