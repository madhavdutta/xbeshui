import { cva, type VariantProps } from "class-variance-authority";
import type {  AcionIconConfigType } from "./actionIconType";

export const AcionIconConfig: AcionIconConfigType = {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			success: "bg-green-600 text-white	shadow-sm hover:bg-green-500",
			warning: "bg-orange-600 text-white shadow-sm hover:bg-orange-500",
			notice: "bg-blue-600 text-white	 shadow-sm hover:bg-blue-500",
			destructive:
				"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
			outline:
				"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-foreground",
			secondary:
				"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/50",
			ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
		},
		size: {
			default: "h-10 w-10",
			xs: "h-8 w-8",
			sm: "h-9 w-9",
			md: "h-10 w-10",
			lg: "h-11 w-11",
			xl: "h-14 w-14",
		},
		radius: {
			none: "rounded-none",
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			xxl: "rounded-2xl",
			full: "rounded-full",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		radius: "sm",
	},
};

export const actionIconVariants = cva(
	"bg-background text-secondary-foreground font-default inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
	AcionIconConfig,
);

export interface ActionIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof actionIconVariants> {
	variant?: keyof AcionIconConfigType["variants"]["variant"];
	size?: keyof AcionIconConfigType["variants"]["size"];
	radius?: keyof AcionIconConfigType["variants"]["radius"];
}
