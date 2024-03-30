import { cva } from "class-variance-authority";
import { CardVariantsConfig } from "./card.d";


const cardConfig:CardVariantsConfig= {
  variants: {
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
      xs: "drop-shadow",
      sm: "drop-shadow-sm",
      md: "drop-shadow-md",
      lg: "drop-shadow-lg",
      xl: "drop-shadow-xl",
    },
    withBorder: {
      default: "",
      true: "border",
      false: "",
    },
  },
  defaultVariants: {
    radius: "default",
    shadow: "default",
    withBorder: false,
  },
}

export const CardVariants = cva(
  "rounded-xl border bg-card text-card-foreground",
  cardConfig
);
