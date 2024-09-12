import { VariantProps, cva } from "class-variance-authority";
import { dialogVarientConfigType } from "./dialogType";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const dialogVarientConfig: dialogVarientConfigType = {
  variants: {
    size: {
      default: "w-2/4",
      full: "w-full",
      xl: "w-5/6",
      lg: "w-3/4",
      md: "w-2/4",
      sm: "w-1/3",
      xs: "w-1/4",
    },
    radius: {
      default: "rounded-sm",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
    radius: "default",
  },
};
export const dialogVariants = cva("", dialogVarientConfig);

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
  VariantProps<typeof dialogVariants> {
  size?: keyof dialogVarientConfigType["variants"]["size"];
  radius?: keyof dialogVarientConfigType["variants"]["radius"];
}
