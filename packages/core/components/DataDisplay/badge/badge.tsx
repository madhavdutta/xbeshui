import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "../../../../utils";

export const badgeVariants = cva(
  "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive:
          "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}

export function Badge({ className, variant, leftSection, rightSection, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {leftSection && <div className="mr-2">{leftSection}</div>}
      {props.children}
      {rightSection && <div className="ml-2">{rightSection}</div>}
    </div>
  )
}

// export { Badge, badgeVariants }
