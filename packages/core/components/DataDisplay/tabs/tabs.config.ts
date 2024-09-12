import { cva } from "class-variance-authority";
import type { TabsConfigType } from "./tabsType";

const tabsConfig: TabsConfigType = {
  variants: {
    variant: {
      default: "",
      outline: "",
      pill: "",
      underline: "",
    },
    // variant: {
    //   default: "bg-primary text-primary-foreground shadow ",
    //   outline: "border border-input bg-transparent shadow-sm  hover:text-foreground",
    //   pill: "rounded-full  text-primary-foreground px-4 py-2 shadow ",
    //   underline: "bg-transparent text-primary underline underline-offset-4 hover:no-underline",
    // },
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
  "flex font-default bg-background text-primary-foreground",
  tabsConfig
);
