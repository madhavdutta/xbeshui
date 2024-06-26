import { cva, type VariantProps } from "class-variance-authority";
import type { SheetVarientConfigType } from "./sheetType";
import type * as SheetPrimitive from "@radix-ui/react-dialog";

export const sheetVarientConfig: SheetVarientConfigType = {
  variants: {
    side: {
      default:
        "inset-x-0 bottom-0 border-t border-input data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      top: "inset-x-0 top-0 border-b w-full border-input data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 border-t w-full border-input data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r border-input data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right:
        "inset-y-0 right-0 h-full w-3/4 border-l border-input data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    },
    size: {
      default: "w-96",
      full: "w-full",
      xl: "w-96",
      lg: "w-80",
      md: "w-64",
      sm: "w-48",
      xs: "w-32",
    },
    fontFamily: {
      default: "font-default",
      serif: "font-serif",
      mono: "font-mono",
      sans: "font-sans",
    },
  },
  defaultVariants: {
    side: "default",
    size: "default",
    fontFamily: "default",
  },
};
export const sheetVariants = cva(
  "bg-background  font-default text-foreground fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  sheetVarientConfig
);

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  children?: React.ReactNode;
  className?: string;
  side?: keyof SheetVarientConfigType["variants"]["side"];
  size?: keyof SheetVarientConfigType["variants"]["size"];
  fontFamily?: keyof SheetVarientConfigType["variants"]["fontFamily"];
}
