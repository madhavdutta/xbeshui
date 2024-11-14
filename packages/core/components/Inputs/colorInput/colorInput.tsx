import { useState, useEffect, useRef } from "react";
import { SketchPicker, type ColorResult } from "react-color";
import { ColorSwatch } from "../colorSwatch/colorSwatch";
import { IconColorPicker } from "@tabler/icons-react";
import { TextInput } from "../..";
import type { ColorInputProps } from "./colorInput.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import React from "react";

declare global {
	interface Window {
		EyeDropper?: new () => EyeDropper;
	}
}

interface EyeDropper {
	open: () => Promise<{ sRGBHex: string }>;
}
export const isClient = typeof window !== "undefined";

export const ColorInputComponent: React.FC<ColorInputProps> = ({
	label = "",
	description = "",
	placeholder,
	radius,
	width,
	variant,
	value: controlledValue,
	onChange,
	defaultValue = "#000000",
	disabled = false,
	required = false,
	className,
}) => {
	useXbeshProviderCheck();

	const [value, setValue] = useState<string>(controlledValue || defaultValue);
	const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const colorPickerRef = useRef<HTMLDivElement>(null);
	const eyeDropperSupported = isClient ? "EyeDropper" in window : "";

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
		if (isClient) {
			if (eyeDropperSupported && window.EyeDropper) {
				const eyeDropper = new window.EyeDropper();
				eyeDropper.open().then((colorSelectionResult) => {
					handleChange(colorSelectionResult.sRGBHex);
				});
			}
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
	}, [showColorPicker, handleOutsideClick]);

	return (
		<div className={className}>
			<div>
				<TextInput
					label={label}
					description={description}
					ref={inputRef}
					type="text"
					radius={radius}
					variant={variant}
					width={width}
					rightSection={
						<IconColorPicker
							size={16}
							stroke={1.5}
							onClick={handleEyeDropperClick}
							className="text-secondary-foreground"
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
				<div ref={colorPickerRef} className="absolute left-0 top-16">
					<SketchPicker
						color={value}
						onChange={handleColorChange}
						disableAlpha={true}
						className="text-primary dark:text-secondary"
					/>
				</div>
			)}
		</div>
	);
};


// export const ColorInputComponent: React.FC<ColorInputProps> = ({
// 	label = "",
// 	description = "",
// 	placeholder,
// 	radius = "default",  // Default values
// 	variant = "default", // Default values
// 	width = "default",   // Default values
// 	value: controlledValue,
// 	onChange,
// 	defaultValue = "#000000",
// 	disabled = false,
// 	required = false,
// 	className,
// }) => {
// 	useXbeshProviderCheck();

// 	const [value, setValue] = useState<string>(controlledValue || defaultValue);
// 	const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	const colorPickerRef = useRef<HTMLDivElement>(null);
// 	const eyeDropperSupported = isClient ? "EyeDropper" in window : "";

// 	useEffect(() => {
// 		if (controlledValue !== undefined) {
// 			setValue(controlledValue);
// 		}
// 	}, [controlledValue]);

// 	const handleChange = (newValue: string) => {
// 		setValue(newValue);
// 		if (onChange) {
// 			onChange(newValue);
// 		}
// 	};

// 	const handleColorChange = (color: ColorResult) => {
// 		const newValue = color.hex;
// 		handleChange(newValue);
// 	};

// 	const handleInputClick = () => {
// 		setShowColorPicker(!showColorPicker);
// 	};

// 	const handleEyeDropperClick = () => {
// 		if (isClient) {
// 			if (eyeDropperSupported && window.EyeDropper) {
// 				const eyeDropper = new window.EyeDropper();
// 				eyeDropper.open().then((colorSelectionResult) => {
// 					handleChange(colorSelectionResult.sRGBHex);
// 				});
// 			}
// 		}
// 	};

// 	const handleOutsideClick = (event: MouseEvent) => {
// 		if (
// 			inputRef.current &&
// 			!inputRef.current.contains(event.target as Node) &&
// 			colorPickerRef.current &&
// 			!colorPickerRef.current.contains(event.target as Node)
// 		) {
// 			setShowColorPicker(false);
// 		}
// 	};

// 	useEffect(() => {
// 		if (showColorPicker) {
// 			document.addEventListener("mousedown", handleOutsideClick);
// 		} else {
// 			document.removeEventListener("mousedown", handleOutsideClick);
// 		}
// 		return () => {
// 			document.removeEventListener("mousedown", handleOutsideClick);
// 		};
// 	}, [showColorPicker]);

// 	return (
// 		<div
// 			className={cn(
// 				tagsinputVariants({ variant, radius, width }),
// 				className
// 			)}
// 		>
// 			<TextInput
// 				label={label}
// 				description={description}
// 				ref={inputRef}
// 				type="text"
// 				radius={radius}
// 				variant={variant}
// 				value={value}
// 				onChange={(e) => handleChange(e.target.value)}
// 				placeholder={placeholder}
// 				disabled={disabled}
// 				required={required}
// 				onClick={handleInputClick}
// 				rightSection={
// 					<IconColorPicker
// 						size={16}
// 						stroke={1.5}
// 						onClick={handleEyeDropperClick}
// 						className="text-secondary-foreground"
// 					/>
// 				}
// 				leftSection={<ColorSwatch color={value} />}
// 			/>
// 			{showColorPicker && (
// 				<div ref={colorPickerRef}>
// 					<SketchPicker
// 						color={value}
// 						onChange={handleColorChange}
// 						disableAlpha={true}
// 						className="text-primary-foreground"
// 					/>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

export const ColorInput = isClient
	? ColorInputComponent
	: React.memo(() => null);
