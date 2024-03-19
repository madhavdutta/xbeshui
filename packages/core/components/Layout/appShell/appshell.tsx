import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Text } from "../..";

export const AppShell = () => {
  return (
    <div className="h-screen">
      <PanelGroup direction="horizontal">
        <Panel
          className="border-r border-gray-200 p-4"
          defaultSize={18}
          minSize={10}
          maxSize={80}
        >
          <Text size="sm" fontFamily={"default"}>
            Navbar
          </Text>
        </Panel>
        <PanelResizeHandle />
        <Panel>
          <PanelGroup direction="vertical">
            <Panel
              className="border-b border-gray-200 p-4"
              defaultSize={5}
              minSize={3}
            >
              <Text size="sm" fontFamily={"default"}>
                Header
              </Text>
            </Panel>
            <PanelResizeHandle />
            <Panel className="p-4">
              <Text size="sm" fontFamily={"default"}>
                Main
              </Text>
            </Panel>
            <PanelResizeHandle />
            <Panel className="border-t border-gray-200 p-4" defaultSize={5}>
              <Text size="sm" fontFamily={"default"}>
                Footer
              </Text>
            </Panel>
            <PanelResizeHandle />
          </PanelGroup>
        </Panel>
        <PanelResizeHandle />
        <Panel
          className="border-l border-gray-200 p-4"
          defaultSize={18}
          minSize={18}
        >
          <Text size="sm" fontFamily={"default"}>
            Aside
          </Text>
        </Panel>
      </PanelGroup>
    </div>
  );
};
