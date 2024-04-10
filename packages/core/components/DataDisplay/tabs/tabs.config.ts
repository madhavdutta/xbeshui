import { cva } from "class-variance-authority";
import {TabsConfigType} from "./tabsType"

const tabsConfig:TabsConfigType = {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            pill: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            underline: "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-transparent shadow-none rounded-none  data-[state=active]:text-foreground data-[state=active]:border-b data-[state=active]:border-gray-900 data-[state=active]:border-b-2",
        },
        radius: {
            default: "rounded-md",
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
}

export const tabsVariants = cva("flex bg-background text-primary-foreground", tabsConfig );