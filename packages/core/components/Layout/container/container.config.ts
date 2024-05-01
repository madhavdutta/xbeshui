import { ContainerVariantType } from "./containerType";
import { cva } from "class-variance-authority";

export const containerConfig: ContainerVariantType = {
  variants: {
    p: {
      default: "p-4",
      none: "p-0",
      xs: "p-1",
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
      xxl: "p-10",
    },
    justify: {
      default: "justify-start",
      start: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      end: "justify-end",
      spaceAround: "justify-around",
    },
    items: {
      default: "items-start",
      start: "items-start",
      center: "items-center",
      baseline: "items-baseline",
      end: "items-end",
      stretch: "items-stretch",
    },
    size: {
      base: "w-full",
      sm: "w-2/5",
      md: "w-3/6",
      lg: "w-3/4",
      xl: "w-4/5",
      full: "w-screen",
    },
  },
  defaultVariants: {
    justify: "default",
    size: "base",
    p: "default",
    items: "default",
    withBorder: false,
  },
};

export const containerVariant = cva("flex flex-col mx-auto p-8 max-w-none", containerConfig);

export interface BreakpointCols {
  cols?: Partial<Record<keyof typeof containerConfig.variants.size, number>>;
}

export interface SizeProps {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  base?: string;
  full?: string;
}

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<BreakpointCols, "size">,
    Partial<ContainerVariantType> {
  justify?: keyof ContainerVariantType["variants"]["justify"];
  p?: keyof ContainerVariantType["variants"]["p"];
  items?: keyof ContainerVariantType["variants"]["items"];
  itemsJustify?: keyof ContainerVariantType["variants"]["items"];
  asChild?: boolean;
  size?: keyof ContainerVariantType["variants"]["size"] | SizeProps;
  fluid?: boolean;
  withBorder?: boolean;
}
