import { cva, type VariantProps } from "class-variance-authority";
import type {
	BadgeVariantsConfigType,
	BadgeRadiusType,
	BadgeSizeType,
} from "./badgeType";
import type { ButtonVariantType } from "../../Buttons/button/buttonType";

export const badgeVariantConfig: BadgeVariantsConfigType = {
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
		},
		size: {
			default: "rounded-sm h-8 px-4 text-sm",
			xs: "rounded-sm h-6 px-2 text-xs",
			sm: "rounded-sm h-8 px-3 text-xs",
			md: "rounded-sm h-8 px-4 text-sm",
			lg: "rounded-md h-8 px-4 text-md",
			"compact-xs": "rounded-sm px-1 text-xs",
			"compact-sm": "rounded-sm px-1 text-sm",
			"compact-md": "rounded-sm px-1 text-sm",
			"compact-lg": "rounded-sm px-1 text-md",
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

export const badgeVariants = cva(
	"inline-flex items-center font-default justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors",
	badgeVariantConfig,
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {
	leftSection?: React.ReactNode;
	rightSection?: React.ReactNode;
	variant?: keyof ButtonVariantType;
	size?: keyof BadgeSizeType;
	radius?: keyof BadgeRadiusType;
}
