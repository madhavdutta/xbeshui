import { cva, type VariantProps } from "class-variance-authority";
import type {RadioConfigType} from './radioType'
const radioConfig:RadioConfigType={
    variants: {
      variant: {
        default: "",
        filled: "bg-primary text-primary-foreground",
        outline: "bg-transparent",
      },
      size: {
        default: "size-5",
        xs: "size-2",
        sm: "size-3",
        md: "size-4",
        lg: "size-5",
        xl: "size-6",
      },
      labelSize: {
        default: "text-base",
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
export const radioVariants = cva("bg-background font-default text-secondary-foreground grid gap-2 rounded-full",radioConfig );


export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof radioVariants> {
  variant?: keyof RadioConfigType["variants"]["variant"];
  size?: keyof RadioConfigType["variants"]["size"];
  disabled?: boolean;
}