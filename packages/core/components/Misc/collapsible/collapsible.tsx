import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

type CollapsibleDemoProps = {
  trigger?: React.ReactNode;
  data: { title: string; items: string[] };
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Collapsible = ({
  data,
  isOpen,
  setIsOpen,
  trigger,
}: CollapsibleDemoProps) => {
  return (
    <CollapsibleMain
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{data.title}</h4>
        <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {data.items.map((item, index) => (
          <div
            key={index}
            className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
          >
            {item}
          </div>
        ))}
      </CollapsibleContent>
    </CollapsibleMain>
  );
};
Collapsible.displayname = "Collapsible";

const CollapsibleMain = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleMain, CollapsibleTrigger, CollapsibleContent };
