import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const progressVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
  {
    variants: {
      variant: {
        default: "",
      },
      radius: {
        default: "rounded-none",
        xs: "rounded",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      size: {
        default: "h-2.5",
        xs: "h-1.5",
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
        xl: "h-10",
      },
      striped: {
        default: "",
      },
      animated: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "default",
      size: "default",
      animated: "default",
    },
  }
);

interface ProgressProps extends VariantProps<typeof progressVariants> {
  variant?: 'default';
  radius?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  striped?: 'default';
  animated?: 'default';
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & ProgressProps
>(
  (
    {
      className,
      value,
      variant,
      color,
      radius,
      size,
      striped,
      animated,
      ...props
    },
    ref
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        progressVariants({
          variant,
          radius,
          size,
          striped,
          animated,
          className,
        })
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={`h-full w-full flex-1 bg-${color}-500  transition-all`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)`,}}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
