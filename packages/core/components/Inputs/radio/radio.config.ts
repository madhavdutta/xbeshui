import { VariantProps, cva } from "class-variance-authority";
import {RadioConfigType} from './radioType'
const radioConfig:RadioConfigType={
    variants: {
      variant: {
        default: "rounded-none",
        filled: "",
        outline: "",
      },
      size: {
        default: "size-5",
        xs: "size-4",
        sm: "size-5",
        md: "size-6",
        lg: "size-7",
        xl: "size-8",
      },

    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
export const radioVariants = cva("grid gap-2",radioConfig );


export interface RadioGroupProps
  extends React.HTMLAttributes<HTMLTableElement>,
    VariantProps<typeof radioVariants> {
  variant?: keyof RadioConfigType["variants"]["variant"];
  size?: keyof RadioConfigType["variants"]["size"];
  disabled?: boolean;
}