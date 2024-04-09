import { VariantProps, cva } from "class-variance-authority";
import { ImageFitType, ImageSizeType, ImageVariantsConfigType } from "./imageType";
const imageConfig: ImageVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down",
    },
  },
  defaultVariants: {
    radius: "default",
    fit: "cover",
  },
};
export const imageVariants = cva("", imageConfig);

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {
  width?: string | number;
  height?: string | number;
  radius?: keyof ImageSizeType;
  fit?: keyof ImageFitType;
}
