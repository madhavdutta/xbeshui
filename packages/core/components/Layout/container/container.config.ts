import { VariantProps, cva } from "class-variance-authority";
import { ContainerVariantType } from "./containerType";

const containerConfig: ContainerVariantType = {
  variants: {
    p: {
      default: "p-0",
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
      default: "max-w-none",
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      xxl: "max-w-xxl",
    },
  },
  defaultVariants: {
    justify: "default",
    size: "default",
    p: "default",
    itemsJustify: "default",
  },
};

export const containerVariant = cva("flex flex-col bg-background text-primary-foreground container mx-auto p-8 max-w-none", containerConfig);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof containerVariant> {
  justify?: keyof ContainerVariantType["variants"]["justify"];
  size?: keyof ContainerVariantType["variants"]["size"];
  p?: keyof ContainerVariantType["variants"]["p"];
  itemsJustify?: keyof ContainerVariantType["variants"]["items"];
  asChild?: boolean;
  fluid?: boolean;
}