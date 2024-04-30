import { VariantProps, cva } from "class-variance-authority";
import { AlertVariantsConfigType, AlertVariantType } from "./alertType";

const AlertVariantConfig:AlertVariantType = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    success: "border-green/50 text-green dark:border-green [&>svg]:text-green",
    warning: "border-orange/50 text-orange dark:border-orange [&>svg]:text-orange",
    notice: "border-blue/50 text-blue dark:border-blue [&>svg]:text-blue",
    muted: "border-muted/50 text-muted dark:border-muted [&>svg]:text-muted",
}

const alertVariantsConfig:AlertVariantsConfigType = {
    variants: {
        variant: AlertVariantConfig
    },
    defaultVariants: {
        variant: "default",
    },
};

const alertPropsConfig = cva(
    "bg-background text-secondary-foreground relative w-full z-10 rounded-lg border border-input px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    alertVariantsConfig
);

export interface AlertPropsType extends React.HTMLAttributes<HTMLDivElement>,  VariantProps<typeof alertPropsConfig> {
    id: string;
    title?: string;
    message?: string;
    icon?: React.ReactNode;
    variant?: keyof AlertVariantType
}
  
export { alertPropsConfig, alertVariantsConfig};