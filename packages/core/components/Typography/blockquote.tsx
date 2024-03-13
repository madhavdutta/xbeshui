import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const blockQuoteVariants = cva(
    "my-5 border-l-2 pl-6 italic text-gray-400",
    {
        variants: {
            size: {
                default: "text-base",
                xs: "text-xs",
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                xxl: "text-2xl",
            },
            textWrap: {
                default: "text-wrap",
                wrap: "text-wrap",
                nowrap: "text-nowrap",
                balance: "text-balance",
                pretty: "text-pretty",
            },
            line: {
                default: "leading-normal",
                xs: "leading-4",
                sm: "leading-5",
                md: "leading-6",
                lg: "leading-7",
                xl: "leading-8",
                xxl: "leading-9",
            },
            fontFamily: {
                default: "font-sans",
                serif: "font-serif",
                mono: "font-mono",
                sans: "font-sans"
            },
            align: {
                default: "text-left",
                center: "text-center",
                right: "text-right",
                justify: "text-justify",
            },
        },
        defaultVariants: {
            size: "default",
            textWrap: "default",
            line: "default",
            fontFamily: "default"
        },
    }
);

export interface BlockQuoteProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof blockQuoteVariants> {
    asChild?: boolean;
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    textWrap?: "default" | "wrap" | "nowrap" | "balance" | "pretty";
    line?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    fontFamily?: "default" | "serif" | "mono" | "sans";
    align?: "default" | "center" | "right" | "justify";
}

const BlockQuote = React.forwardRef<HTMLParagraphElement, BlockQuoteProps>(
    ({ className, size, textWrap, line, fontFamily, align, ...props }, ref: React.Ref<HTMLParagraphElement>) => {

        return (
            <p
                className={cn(className, blockQuoteVariants({ size, textWrap, line, fontFamily, align }))}
                ref={ref}
                {...props}
            >
                {props.children}
            </p>
        );
    }
);

BlockQuote.displayName = "BlockQuote";

export { BlockQuote };
