import type{ ColorSwatchProps } from "./colorSwatchType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, className }) => {
  useXbeshProviderCheck();
  return (
    <div
      className={`rounded-full h-5 w-5 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
};

export  {ColorSwatch};
