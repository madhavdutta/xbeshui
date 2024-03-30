import { cva } from "class-variance-authority";
import {radioConfigType} from './radio.d'
const radioConfig:radioConfigType={
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
export const RadioVariants = cva("grid gap-2",radioConfig );