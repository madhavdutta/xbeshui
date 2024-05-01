import { VariantProps, cva } from "class-variance-authority";
import { CardRadiusType, CardShadowType, CardVariantsConfigType } from "./cardType";

export interface CardOwnProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: {
    title?: string;
    description?: React.ReactNode;
  },
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface CardProps extends CardOwnProps, VariantProps<typeof CardVariants> {
  withBorder?: boolean;
  shadow?: keyof CardShadowType;
  radius?: keyof CardRadiusType;
}

const cardConfig: CardVariantsConfigType = {
  variants: {
    padding: {
      default: "p-4",
      xs: "p-2.5",
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
      xl: "p-8",
    },
    radius: {
      default: "rounded-sm",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    shadow: {
      default: "shadow",
      none: "shadow-none",
      xs: "shadow-xs",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    withBorder: {
      default: "",
      true: "border",
      false: "border-none",
    },
  },
  defaultVariants: {
    padding: "default",
    radius: "default",
    shadow: "default",
    withBorder: false,
  },
};

export const CardVariants = cva("bg-card text-card-foreground", cardConfig);
