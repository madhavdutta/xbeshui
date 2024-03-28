import { cva } from "class-variance-authority";
import { toastVariantsConigType } from "./toast.d";

const toastVariantsConig: toastVariantsConigType = {
  variants: {
    variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        success: "bg-green-600 text-white	 shadow-sm hover:bg-green/90",
        warning: "bg-orange-600 text-white shadow-sm hover:bg-orange/90",
        notice: "bg-blue-600 text-white	 shadow-sm hover:bg-blue/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
};

export const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  toastVariantsConig
);
