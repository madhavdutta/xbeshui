import { VariantProps, cva } from "class-variance-authority";
import { AlertVariantsConfigType, AlertVariantType } from "./alertType";

const AlertVariantConfig:AlertVariantType = {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    success: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    warning: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    notice: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    muted: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
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
    "bg-background text-primary-foreground relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
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