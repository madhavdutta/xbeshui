import { cva } from "class-variance-authority";
import { TabsConfigType } from "./tabsType";

const tabsConfig: TabsConfigType = {
  variants: {
    variant: {
      default: "",
      outline: "",
      pill: "",
      underline: "",
    },
    radius: {
      default: "rounded-sm",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    orientation: {
      default: "flex-row",
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    size: {
      default: "text-sm",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    radius: "default",
    orientation: "default",
    size: "default",
  },
};

export const tabsVariants = cva(
  "flex bg-background text-primary-foreground",
  tabsConfig
);
