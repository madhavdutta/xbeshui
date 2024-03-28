import { VariantProps } from "class-variance-authority";

export type cardRadius = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};
export type cardShadow = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface CardVariantsConfig {
  variants: {
    radius: cardRadius;
    shadow: cardShadow;
    withBorder: {
      default: string;
      true: string;
      false: string;
    };
  };
  defaultVariants: {
    withBorder:boolean;
    shadow: keyof cardShadow;
    radius: keyof cardRadius;
  };
}

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  withBorder: boolean;
  shadow: keyof cardShadow;
  radius: keyof cardRadius;
}
