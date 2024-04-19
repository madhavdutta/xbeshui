import * as React from "react";
import { IconSelect, IconCheck } from "@tabler/icons-react";
import {
  PopoverContent,
  PopoverTrigger,
  Popovermain,
} from "../../Overlays/popover/popover";
import { Button } from "../../Buttons/button/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../spotlight/spotlight";
import { cn } from "../../../../utils";

interface DataType {
  value: string;
  label: string;
}

interface ComboboxDemoProps {
  data: DataType[];
}

const ComboBox = ({ data }: ComboboxDemoProps) => {
  const [opened, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popovermain open={opened} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" rightSection ={   <IconSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" />} className="w-[200px] justify-between">
          {value
            ? data.find((framework) => framework.value === value)?.label
            : "Select framework..."}
       
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {data.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <IconCheck
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popovermain>
  );
};
ComboBox.displayname = "ComboBox";
export { ComboBox };
