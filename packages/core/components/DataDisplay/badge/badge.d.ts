import { VariantProps } from "class-variance-authority";
import { ButtonVariant } from "../../../types/variantType";

export type badgeSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  "compact-xs": string;
  "compact-sm": string;
  "compact-md": string;
  "compact-lg": string;
};

export type badgeRadius = {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  full: string;
};

export interface BadgeVariantsConfig {
  variants: {
    variant: ButtonVariant;
    size: badgeSize;
    radius: badgeRadius;
  };
  defaultVariants: {
    variant: keyof ButtonVariant;
    size: keyof badgeSize;
    radius: keyof badgeRadius;
  };
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  variant: keyof ButtonVariant;
  size:  ButtonSize;
  radius: ButtonRadius;
}
