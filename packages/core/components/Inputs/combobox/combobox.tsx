import * as React from "react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { Popover } from "../../Overlays/popover/popover";
import { Button } from "../../Buttons/button/button";
import { Command } from "../command/command";
import { cn } from "../../../../utils";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface DataType {
  value: string;
  label: string;
}

interface ComboboxDemoProps {
  data: DataType[];
}

const ComboBox = ({ data }: ComboboxDemoProps) => {
  useXbeshProviderCheck();
  const [opened, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={opened} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          rightSection={
            <IconSelector className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          }
          className="w-[200px] justify-between"
        >
          {value
            ? data.find((framework) => framework.value === value)?.label
            : "Select framework..."}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-[200px] p-0">
        <Command>
          <Command.Input placeholder="Search framework..." className="h-9" />
          <Command.Empty>No framework found.</Command.Empty>
          <Command.Group>
            {data.map((framework) => (
              <Command.List key={framework.value}>
                <Command.Item
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
                </Command.Item>
              </Command.List>
            ))}
          </Command.Group>
        </Command>
      </Popover.Content>
    </Popover>
  );
};
ComboBox.displayname = "ComboBox";
export { ComboBox };
