import { cva } from "class-variance-authority";
import { AlertVariantsType, AlertVariant } from "./alert.d";

const AlertVariantConfig:AlertVariant = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    success: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    warning: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    notice: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    muted: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
}

const alertVariantsConfig:AlertVariantsType = {
    variants: {
        variant: AlertVariantConfig
    },
    defaultVariants: {
        variant: "default",
    },
};

const alertPropsConfig = cva(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    alertVariantsConfig
);
  
export { alertPropsConfig, alertVariantsConfig};