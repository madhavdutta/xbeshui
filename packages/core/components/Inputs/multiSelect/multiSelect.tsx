import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Badge } from "../..";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

type Framework = Record<"value" | "label", string>;

interface MultiSelectProps {
  frameworks: Framework[];
}

const MultiSelect = ({ frameworks = [] }: MultiSelectProps) => {
  useXbeshProviderCheck();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Framework[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Framework) => {
    setSelected(prev => prev.filter(s => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (!input) return;

    if (e.key === "Delete" || e.key === "Backspace") {
      if (inputValue === "") {
        setSelected(prev => {
          const newSelected = [...prev];
          newSelected.pop();
          return newSelected;
        });
      }
    }

    if (e.key === "Escape") {
      input.blur();
    }
  }, [inputValue]);
  const selectables = (frameworks || []).filter(framework => !selected.some(s => s.value === framework.value));


  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group w-96 border border-input px-3 py-2 text-sm rounded-md">
        <div className="flex gap-1 flex-wrap">
          {selected.map((framework) => (
            <Badge key={framework.value} variant="secondary">
              {framework.label}
              <button
                className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => handleUnselect(framework)}
                aria-label="Remove"
              >
                x
              </button>
            </Badge>
          ))}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select here..."
            className="ml-2 text-xs px-0 bg-transparent h-6 border-0 focus:outline-none placeholder:text-muted-foreground flex-1"
          />
        </div>
      </div>
      {open && selectables.length > 0 && (
        <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
          <CommandPrimitive.Group className="h-full overflow-auto">
            {selectables.map((framework) => (
              <CommandPrimitive.Item
                key={framework.value}
                onSelect={() => {
                  setInputValue("");
                  setSelected(prev => [...prev, framework]);
                }}
                className="cursor-pointer"
              >
                {framework.label}
              </CommandPrimitive.Item>
            ))}
          </CommandPrimitive.Group>
        </div>
      )}
    </CommandPrimitive>
  );
};

export { MultiSelect };