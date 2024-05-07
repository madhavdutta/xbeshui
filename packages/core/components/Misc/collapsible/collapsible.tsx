import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import React from "react";

interface CollapsibleItemConfig {
  title: string;
  items: string[];
}

interface CollapsibleProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {
  data: CollapsibleItemConfig;
  trigger: React.ReactNode;
}

interface CollapsibleComponent<
  T extends React.ElementType = typeof CollapsiblePrimitive.Root
> extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      React.RefAttributes<React.ElementRef<T>>
  > {
  Trigger: typeof CollapsibleTrigger;
  Content: typeof CollapsibleContent;
}

const CollapsibleWrapper = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ data, trigger, ...props }, ref) => {
    useXbeshProviderCheck();

    return (
      <CollapsiblePrimitive.Root ref={ref} {...props}>
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">{data.title}</h4>
          <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
        </div>
        <CollapsibleContent data={data} />
      </CollapsiblePrimitive.Root>
    );
  }
);

const CollapsibleTrigger: React.FC<
  React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>
> = (props) => <CollapsiblePrimitive.CollapsibleTrigger {...props} />;

const CollapsibleContent: React.FC<{ data: CollapsibleItemConfig }> = ({
  data,
}) => {
  return (
    <CollapsiblePrimitive.CollapsibleContent className="space-y-2">
      {data.items.map((item, index) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          className="rounded-sm border px-4 py-2 font-mono text-sm shadow-sm"
        >
          {item}
        </div>
      ))}
    </CollapsiblePrimitive.CollapsibleContent>
  );
};

(CollapsibleWrapper as CollapsibleComponent).Trigger = CollapsibleTrigger;
(CollapsibleWrapper as CollapsibleComponent).Content = CollapsibleContent;

export { CollapsibleWrapper as Collapsible };
