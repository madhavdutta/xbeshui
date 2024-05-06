import { cva, type VariantProps } from "class-variance-authority";
import type { StackVariantType } from "./stackType";
const stackConfig: StackVariantType = {
  variants: {
    justify: {
      default: "",
      top: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      bottom: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      default: "",
      left: "items-start",
      center: "items-center",
      right: "items-end",
      stretch: "items-stretch",
    },
    gap: {
      default: "gap-2",
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
  },
  defaultVariants: {
    justify: "default",
    align: "default",
    gap: "default",
  },
};
export const stackVariant = cva(
  "text-foreground flex flex-col w-full",
  stackConfig
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariant> {
  asChild?: boolean;
  height?:number;
  justify?: keyof StackVariantType["variants"]["justify"];
  align?: keyof StackVariantType["variants"]["align"];
  gap?: keyof StackVariantType["variants"]["gap"];
  grow?: boolean;
}
