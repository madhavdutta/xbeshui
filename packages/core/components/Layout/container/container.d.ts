import { VariantProps } from "class-variance-authority";
import { containerVariant } from "./container.config";

export interface containerJustifyVariantType {
  variants: {
    p: {
      default: string;
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    justify: {
      flexStart: string;
      center: string;
      spaceBetween: string;
      flexEnd: string;
      spaceAround: string;
    };
    size: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  defaultVariants: {
    justify: keyof containerJustifyVariantType['variants']['justify'];
    size: keyof containerJustifyVariantType['variants']['size'];
    p: keyof containerJustifyVariantType['variants']['p'];
  };
}

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariant> {
  justify?: keyof containerJustifyVariantType["variants"]["justify"];
  size?: keyof containerJustifyVariantType["variants"]["size"];
  p?: keyof containerJustifyVariantType["variants"]["p"];
  asChild?: boolean;
  fluid?: boolean;
}
