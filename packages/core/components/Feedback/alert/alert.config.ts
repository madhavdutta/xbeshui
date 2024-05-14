import { cva, type VariantProps } from "class-variance-authority";
import type { AlertVariantType } from "./alertType";
// import * as React from "react";


const alertPropsConfig = cva(
  "relative w-full font-default rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "bg-destructive/50 border-destructive dark:text-white [&>svg]:text-destructive",
        success: "bg-success/50 border-success text-primary [&>svg]:text-green",
        warning: "bg-warning/50 border-warning text-primary [&>svg]:text-orange",
        notice: "bg-notice/50 border-notice text-primary [&>svg]:text-blue",
        muted: "bg-muted text-muted dark:text-white [&>svg]:text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// const AlertVariantConfig: AlertVariantType = ;

// const alertVariantsConfig: AlertVariantsConfigType = {
//   variants: {
//     variant: AlertVariantConfig,
//   },
//   defaultVariants: {
//     variant: "default",
//   },
// };

// const alertPropsConfig = cva(
//   "static w-full z-10 rounded-sm px-4 py-3 text-sm ",
//   alertVariantsConfig
// );

export interface AlertPropsType extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertPropsConfig> {
  id: string;
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  variant?: keyof AlertVariantType;
}

export { alertPropsConfig };