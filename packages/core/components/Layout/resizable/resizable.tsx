import { IconGripVertical } from "@tabler/icons-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "../../../../utils";
import React from "react";

type PanelConfig = {
  key: string | number;
  content: React.ReactNode;
  resizable?: boolean;
  defaultSize?: number  // Note the addition here
  direction?: 'horizontal' | 'vertical';
  nestedPanels?: PanelConfig[]; 
};

type DynamicResizablePanelsProps = {
  panels: PanelConfig[];
  className?: string;
  direction?: 'horizontal' | 'vertical'; 
};

const Resizable: React.FC<DynamicResizablePanelsProps> = ({ panels, className, direction = 'horizontal' }) => {
  return (
    <ResizablePanelGroup className={className} direction={direction}>
      {panels.map((panel, index) => (
        <React.Fragment key={panel.key}>
          <ResizablePanel defaultSize={panel.defaultSize}>
            {panel.nestedPanels ? (
              <Resizable panels={panel.nestedPanels} direction={panel.direction} />
            ) : (
              panel.content
            )}
          </ResizablePanel>
          {panel.resizable && index < panels.length - 1 && (
            <ResizableHandle withHandle />
          )}
        </React.Fragment>
      ))}
    </ResizablePanelGroup>
  );
};

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <IconGripVertical stroke={1.5} className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export {Resizable};
