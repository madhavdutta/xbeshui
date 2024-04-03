import { VariantProps } from "class-variance-authority";
import { groupVariant } from "./group.config";

export interface groupVariantType {
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
      center: string;
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
    wrap: {
      default: string;
      wrap: string;
      nowrap: string;
    };
    grow: {
      default: string;
      true: string;
      flase: string;
    };
  };
  defaultVariants: {
    justify: keyof groupVariantType["variants"]["justify"];
    align: keyof groupVariantType["variants"]["align"];
    gap: keyof groupVariantType["variants"]["gap"];
    wrap: keyof groupVariantType["variants"]["wrap"];
  };
}

export interface GroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupVariant> {
  asChild?: boolean;
  justify?: keyof groupVariantType["variants"]["justify"];
  align?: keyof groupVariantType["variants"]["align"];
  gap?: keyof groupVariantType["variants"]["gap"];
  wrap?: keyof groupVariantType["variants"]["wrap"];
  grow?: keyof groupVariantType["variants"]["grow"];
}
