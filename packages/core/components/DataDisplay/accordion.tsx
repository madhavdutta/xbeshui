import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { IconChevronDown } from "@tabler/icons-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const accordionVariants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      filled: "bg-gray-200",
      contained: "border border-gray-200 rounded-md",
      separated: "border-t border-b border-gray-200",
    },
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    chevronPosition: {
      default: "",
      left: "ml-2",
      right: "mr-2",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    chevronPosition: "default",
  },
});


// eslint-disable-next-line react/display-name
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants> 
>(({ className, variant, radius, chevronPosition, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    // Ensure the `type` prop is forwarded to the AccordionPrimitive.Root
    className={cn(
      className,
      accordionVariants({ variant, radius, chevronPosition })
    )}
    {...props}
  />
));

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    VariantProps<typeof accordionVariants>
>(
  (
    { className, children, chevronPosition, type = "multiple", ...props },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all ",
          accordionVariants({ chevronPosition }),
          className
        )}
        {...props}
      >
        {children}
        <IconChevronDown stroke={1.5} className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
