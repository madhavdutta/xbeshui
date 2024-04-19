import { VariantProps, cva } from "class-variance-authority";
import { StackVariantType } from "./stackType";
const stackConfig: StackVariantType = {
  variants: {
    justify: {
      default: "justify-start",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      default: "items-start",
      itemStart: "items-start",
      center: "items-center",
      itemEnd: "items-end",
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
    justify: "flexStart",
    align: "itemStart",
    gap: "default",
  },
};
export const stackVariant = cva(
  "bg-background text-primary-foreground flex flex-col w-full",
  stackConfig
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariant> {
  asChild?: boolean;
  justify?: keyof StackVariantType["variants"]["justify"];
  align?: keyof StackVariantType["variants"]["align"];
  gap?: keyof StackVariantType["variants"]["gap"];
  grow?: boolean;
}
