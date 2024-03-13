import * as React from "react";

import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority";
import "../Theme/xbeshDefaultUIStyles.css";

const stackJustifyVariant = cva("flex flex-col w-full", {
  variants: {
    justify: {
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      itemStart: "items-start",
      center: "items-center",
      itemEnd: "items-end",
      stretch: "items-stretch",
    },
    gap: {
      default: "gap-0",
      xxs: "gap-2",
      xs: "gap-8",
      sm: "gap-12",
      md: "gap-16",
      lg: "gap-20",
      xl: "gap-24",
      xxl: "gap-28",
    },
    grow: {
      true: "xbeshCustomGrow",
      false: "",
    },
  },
  defaultVariants: {
    justify: "flexStart",
    align: "itemStart",
    gap: "default",
    grow: false,
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackJustifyVariant> {
  asChild?: boolean;
  justify?: "flexStart" | "center" | "spaceBetween" | "flexEnd" | "spaceAround";
  align?: "itemStart" | "center" | "itemEnd" | "stretch";
  gap?: "default" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  grow?: boolean;
}

const Stack = React.forwardRef<HTMLInputElement, StackProps>(
  ({ className, justify, gap, grow, align, ...props }, ref) => {
    return (
      <div
        className={cn(
          stackJustifyVariant({ justify, gap, grow, align, className })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Stack.displayName = "Stack";

export { Stack };
