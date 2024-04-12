import { VariantProps, cva } from "class-variance-authority";
import { CardRadiusType, CardShadowType, CardVariantsConfigType } from "./cardType";


const cardConfig:CardVariantsConfigType= {
  variants: {
    size: {
      default: "w-auto",
      xs: "w-xs",
      sm: "w-sm",
      md: "w-md",
      lg: "w-lg",
      xl: "w-xl",
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

export const CardVariants = cva("bg-background text-secondary-foreground bg-card text-card-foreground rounded-md  border border-input w-auto margin-auto p-2", cardConfig);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  withBorder?: boolean;
  shadow?: keyof CardShadowType;
  radius?: keyof CardRadiusType;
}
