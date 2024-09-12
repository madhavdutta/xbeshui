import { cva, type VariantProps } from "class-variance-authority";
import type { BackgroundImageFitType, BackgroundImageRadiusType, BackgroundImageVariantsConfigType } from "./backgroundImageType";

export const backgroundImageVariant: BackgroundImageVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-md",
      none: "rounded-none",
      xs: "rounded-xs",
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
export const backgroundImageVariants = cva("bg-background font-default text-primary-foreground", backgroundImageVariant);

export interface BackgroundImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof backgroundImageVariants> {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  radius: keyof BackgroundImageRadiusType;
  fit: keyof BackgroundImageFitType;
}