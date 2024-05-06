import { Card, Code, Group, Tabs, ToggleGroup } from "../../components";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/Layout/resizable/resizable";
// import App from "../../../../src/App";
import { useEffect, useState } from "react";
import {
  IconDeviceLaptop,
  IconDeviceTablet,
  IconPhone,
} from "@tabler/icons-react";

interface PreviewCompProps {
  iframeSrc: string;
  codeContent: string;
}

export const PreviewComp = (data: PreviewCompProps) => {
  const [screenSize, setScreenSize] = useState(33);
  const [panelSize, setPanelSize] = useState(33);
  const [changedSize, setChangedSize] = useState(1);

  const handleScreenSize = (value: number) => {
    setScreenSize(value);
    setPanelSize(value);
    setChangedSize(100 - value);
    console.log(value);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // setPanelSize(screenSize);
    console.log("working..");
  }, [screenSize, panelSize]);

  return (
    <Card className="w-full">
      <ToggleGroup type="single" radius={"full"}>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(33);
          }}
          value="33"
          aria-label="Toggle phone"
        >
          <IconPhone
            size={18}
            stroke={1.5}
            className="text-secondary-foreground "
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(66);
          }}
          value="66"
          aria-label="Toggle tablet"
        >
          <IconDeviceTablet
            size={18}
            stroke={1.5}
            className="text-secondary-foreground"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(99);
          }}
          value="99"
          aria-label="Toggle laptop"
        >
          <IconDeviceLaptop
            size={18}
            stroke={1.5}
            className="text-secondary-foreground"
          />
        </ToggleGroup.Item>
      </ToggleGroup>
      <Group>
        <Group justify="spaceBetween">
          <Tabs defaultValue="preview" className="w-full">
            <Tabs.TabsList
              variant="pill"
              className="grid grid-cols-2 h-[35px] w-[200px]"
            >
              <Tabs.TabsTrigger
                variant="pill"
                className=" h-[25px]"
                value="preview"
              >
                Preview
              </Tabs.TabsTrigger>
              <Tabs.TabsTrigger
                variant="pill"
                className=" h-[25px]"
                value="code"
              >
                Code
              </Tabs.TabsTrigger>
            </Tabs.TabsList>
            <Tabs.TabsContent
              className="mt-4 w-full rounded-sm bg-accent "
              value="preview"
            >
              <ResizablePanelGroup
                direction="horizontal"
                className="border rounded-sm"
              >
                <ResizablePanel
                  style={{
                    flex: `${panelSize} 1 0px`,
                    overflow: "hidden",
                    height: "80vh",
                  }}
                  defaultSize={panelSize}
                  minSize={30}
                >
                  <iframe src={data.iframeSrc} className="w-full h-full" />
                </ResizablePanel>

                <ResizableHandle withHandle />

                <ResizablePanel
                  style={{ flex: `${changedSize} 1 0px`, overflow: "hidden" }}
                  defaultSize={100 - panelSize}
                >
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold"></span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </Tabs.TabsContent>
            <Tabs.TabsContent
              value="code"
              className="w-full mt-4 border rounded-sm"
            >
              <Code language="jsx"  className="bg-black  rounded-sm">
                {data.codeContent}
              </Code>
            </Tabs.TabsContent>
          </Tabs>
        </Group>
      </Group>
    </Card>
  );
};
