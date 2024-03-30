import { VariantProps } from "class-variance-authority";
import { listVariants } from "./list.config";

export interface ListVariantsType {
  variants: {
    type: {
      default: string;
      none: string;
      disc: string;
      decimal: string;
    };
    fontSize: {
      default: string;
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
    position: {
      default: string;
      inside: string;
      outside: string;
    };
  };
  defaultVariants: {
    type: keyof ListVariantsType["variants"]["type"];
    fontSize: keyof ListVariantsType["variants"]["fontSize"];
    position: keyof ListVariantsType["variants"]["position"];
  };
}

export interface ListProps
  extends React.HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof listVariants> {
  asChild?: boolean;
  type?: keyof ListVariantsType["variants"]["type"];
  fontSize?: keyof ListVariantsType["variants"]["fontSize"];
  position?: keyof ListVariantsType["variants"]["position"];
  children?: React.ReactNode;
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
}
