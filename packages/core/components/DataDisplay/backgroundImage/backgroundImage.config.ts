import { cva } from "class-variance-authority";
import { BackgroundImageVariantsConfig } from "./backgroundImage.d";

export const backgroundImageVariant: BackgroundImageVariantsConfig = {
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      full: "rounded-full"
    },
    fit: {
      contain: "bg-contain",
      cover: "bg-cover",
      fill: "bg-fill",
      none: "bg-none",
      scaleDown: "bg-scale-down",
    },
  },
  defaultVariants: {
    radius: "none",
    fit: "cover",
  },
};
export const backgroundImageVariants = cva("", backgroundImageVariant);
