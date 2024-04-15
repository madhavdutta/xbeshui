import { VariantProps } from "class-variance-authority";
import { stackVariant } from "./stack.config";

export interface AppShellVariantType {
    variants: {
        variant: {
            default: string;
            inner: string;
        };
        layout: {
            default: string;
            alt: string;
        };
    };
    defaultVariants: {
        variant: keyof AppShellVariantType["variants"]["variant"];
        layout: keyof AppShellVariantType["variants"]["layout"];
    };
}


