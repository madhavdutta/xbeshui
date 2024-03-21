import React, { useState, useEffect, useRef } from "react";
import { SketchPicker, ColorResult } from "react-color";
import ColorSwatch from "../colorSwatch/colorSwatch";
import { IconColorPicker } from "@tabler/icons-react";
import { Input } from "../..";

interface ColorInputProps {
  label?: React.ReactNode | string;
  description?: React.ReactNode | string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  format?: "hex" | "rgb" | "hsl";
  swatches?: string[];
  swatchesPerRow?: number;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  size?:string | number
}

export const ColorInput: React.FC<ColorInputProps> = ({
  label = "",
  description = "",
  placeholder,
  radius,
  value: controlledValue,
  onChange,
  defaultValue = "#000000",
  disabled = false,
  required = false,
  className,
}) => {
  const [value, setValue] = useState<string>(controlledValue || defaultValue);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const eyeDropperSupported = "EyeDropper" in window;

  useEffect(() => {
    if (controlledValue !== undefined) {
      setValue(controlledValue);
    }
  }, [controlledValue]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleColorChange = (color: ColorResult) => {
    const newValue = color.hex;
    handleChange(newValue);
  };

  const handleInputClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleEyeDropperClick = () => {
    if (eyeDropperSupported) {
      const eyeDropper = new (window as any).EyeDropper();
      eyeDropper.open().then((colorSelectionResult: any) => {
        handleChange(colorSelectionResult.sRGBHex);
      });
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target as Node)
    ) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showColorPicker]);

  return (
    <div className={className}>
      <div>
        <Input
          label={label}
          description={description}
          ref={inputRef}
          type="text"
          radius={radius}
          rightSection={
            <IconColorPicker
              size={16}
              stroke={1.5}
              onClick={handleEyeDropperClick}
            />
          }
          leftSection={<ColorSwatch color={value} />}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onClick={handleInputClick}
        />
      </div>
      {showColorPicker && (
        <div ref={colorPickerRef} >
          <SketchPicker
            color={value}
            onChange={handleColorChange}
            disableAlpha={true}
          />
        </div>
      )}
    </div>
  );
};