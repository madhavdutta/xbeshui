import { VariantProps, cva } from "class-variance-authority";
import { CardRadiusType, CardShadowType, CardVariantsConfigType } from "./cardType";


const cardConfig:CardVariantsConfigType= {
  variants: {
    size: {
      default: "w-auto",
      xs: "w-1/4",
      sm: "w-1/3",
      md: "w-2/5",
      lg: "w-1/2",
      xl: "w-3/5",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    shadow: {
      default: "drop-shadow",
      none:"drop-shadow-none",
      xs: "drop-shadow",
      sm: "drop-shadow-sm",
      md: "drop-shadow-md",
      lg: "drop-shadow-lg",
      xl: "drop-shadow-xl",
    },
    withBorder: {
      default: "",
      true: "border",
      false: "border-none",
    },
  },
  defaultVariants: {
    size: "default",
    radius: "default",
    shadow: "default",
    withBorder: false,
  },
}

export const CardVariants = cva("bg-background w-auto text-secondary-foreground bg-card text-card-foreground rounded-md  border border-input margin-auto", cardConfig);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  withBorder?: boolean;
  shadow?: keyof CardShadowType;
  radius?: keyof CardRadiusType;
}
