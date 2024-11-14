import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { IconChevronDown } from "@tabler/icons-react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";
import { accordionVariants } from "./accordion.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface AccordionComponent<T extends React.ElementType = typeof AccordionPrimitive.Root>
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
    VariantProps<typeof accordionVariants> &
    React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>
>(({ className, variant, radius, chevronPosition, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <AccordionPrimitive.Root
      ref={ref}
      className={cn(
        className,
        accordionVariants({ variant, radius, chevronPosition }),
        'w-full h-auto'
      )}
      {...props}
    />
  );
}) as AccordionComponent;

Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-input", className, 'w-full')}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";


type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  "data-state"?: AccordionPrimitive.AccordionItemProps["value"];
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps & VariantProps<typeof accordionVariants>
>(({ className, children, chevronPosition, chevronSize, ...props }, ref) => (
  <AccordionPrimitive.Header className="w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex items-center text-secondary-foreground px-4 justify-between py-4 text-sm font-medium w-full",
        accordionVariants({ chevronPosition }),
        'w-full',
        className
      )}
      {...props}
    >
      <div className="flex-nowrap text-nowrap text-left">
        {children}
      </div>
      <IconChevronDown
        className={cn(
          `shrink-0 text-muted-foreground transition-transform duration-200`,
          accordionVariants({ chevronSize }),
          {
            "rotate-90": props["data-state"] === "open",
          }
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));


AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "w-full text-secondary-foreground px-4 text-sm transition-all duration-300 overflow-hidden",
      "data-[state=open]:animate-accordion-down",
      "data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  >
    <div className="pb-2 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = "AccordionContent";

(Accordion as AccordionComponent).Item = AccordionItem;
(Accordion as AccordionComponent).Trigger = AccordionTrigger;
(Accordion as AccordionComponent).Content = AccordionContent;

export { Accordion };
