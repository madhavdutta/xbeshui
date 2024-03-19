import { AccordionVariants } from './accordion.d'

export const accordionVariantsConfig: AccordionVariants = {
    variants: {
        variant: {
            default: "filled",
            filled: "bg-gray-200",
            contained: "border border-gray-200 rounded-md",
            separated: "border-t border-b border-gray-200",
        },
        radius: {
            default: "rounded-none",
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            xxl: "rounded-2xl",
            full: "rounded-full",
        },
        chevronPosition: {
            default: "",
            left: "ml-2",
            right: "mr-2",
        },
        chevronSize: {
            default: "h-4 w-4",
            sm: "h-3 w-3",
            md: "h-4 w-4",
            lg: "h-5 w-5",
        },
        multiple: {
            default: false,
            true: true,
            false: false,
        }
    },
    defaultVariants: {
        variant: "default",
        radius: "default",
        chevronPosition: "default",
        chevronSize: "default",
        multiple: "default"
    },
};