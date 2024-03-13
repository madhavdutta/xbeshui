import * as React from "react";

import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority";
import "../Theme/xbeshDefaultUIStyles.css";

const groupJustifyVariant = cva("w-full flex flex-row", {
  variants: {
    justify: {
      default: "",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      center: "items-center",
    },
    gap: {
      default: "gap-16",
      xxs: "gap-2",
      xs: "gap-4",
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
    justify: "default",
    align:'center',
    gap: "default",
    grow: false,
  },
});

export interface GroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupJustifyVariant> {
  asChild?: boolean;
  justify?: "flexStart" | "center" | "spaceBetween" | "flexEnd" | "spaceAround";
  align?: "center" ;
  gap?: "default" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  grow?: boolean;
}

const Group = React.forwardRef<HTMLInputElement, GroupProps>(
  ({ className, justify, align, gap, grow, ...props }, ref) => {
    return (
      <div
        className={cn(
          groupJustifyVariant({ justify, align, gap, grow, className })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);
Group.displayName = "Group";

export { Group };
