import { VariantProps } from "class-variance-authority";
import { stackVariant } from "./stack.config";

export interface stackVariantType {
  variants: {
    justify: {
      default: string;
      flexStart: string;
      center: string;
      spaceBetween: string;
      flexEnd: string;
      spaceAround: string;
    };
    align: {
      default: string;
      itemStart: string;
      center: string;
      itemEnd: string;
      stretch: string;
    };
    gap: {
      default: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  };
  defaultVariants: {
    justify: keyof stackVariantType["variants"]["justify"];
    align: keyof stackVariantType["variants"]["align"];
    gap: keyof stackVariantType["variants"]["gap"];
  };
}

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariant> {
  asChild?: boolean;
  justify?: keyof stackVariantType["variants"]["justify"];
  align?: keyof stackVariantType["variants"]["align"];
  gap?: keyof stackVariantType["variants"]["gap"];
  grow?: boolean;
}
