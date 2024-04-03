import React from "react";
export type PanelConfig = {
  key: string | number;
  content: React.ReactNode;
  resizable?: boolean;
  defaultSize?: number;
  direction?: "horizontal" | "vertical";
  nestedPanels?: PanelConfig[];
};

export type DynamicResizablePanelsProps = {
  panels: PanelConfig[];
  className?: string;
  direction?: "horizontal" | "vertical";
};
