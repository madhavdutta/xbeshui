import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const titleVariants = cva(
    "scroll-m-20 font-normal tracking-tight ",
    {
        variants: {
            order: {
                h1: "text-7xl",
                h2: "text-6xl",
                h3: "text-5xl",
                h4: "text-4xl",
                h5: "text-3xl",
                h6: "text-2xl",
            },
            size: {
                default: "",
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
                tight: "leading-tight",
                snug: "leading-snug",
                relaxed: "leading-relaxed",
                loose: "leading-loose"
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
            gradient:{
                default: "",
                lr: "bg-gradient-to-r text-transparent  bg-clip-text",
                rl: "bg-gradient-to-l text-transparent  bg-clip-text",
                tb: "bg-gradient-to-b text-transparent  bg-clip-text",
                bt: "bg-gradient-to-t text-transparent  bg-clip-text",
                tl: "bg-gradient-to-tl text-transparent  bg-clip-text",
                tr: "bg-gradient-to-tr text-transparent  bg-clip-text",
                bl: "bg-gradient-to-bl text-transparent  bg-clip-text",
                br: "bg-gradient-to-br text-transparent  bg-clip-text",
            }
        },
        defaultVariants: {
            order: "h1",
            size: "default",
            textWrap: "default",
            line: "default",
            fontFamily: "default",
            align: "default",
            gradient: "default"
        },
    }
);

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
    asChild?: boolean;
    order?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    textWrap?: "default" | "wrap" | "nowrap" | "balance" | "pretty";
    line?: "default" | "tight" | "snug" | "relaxed" | "loose";
    fontFamily?: "default" | "serif" | "mono" | "sans";
    align?: "default" | "center" | "right" | "justify";
    gradient?: "default" | "lr" | "rl" | "tb" | "bt" | "tl" | "tr" | "bl" | "br";
    gradientColors?: string
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({ className, order = "h1", size, textWrap, line, fontFamily, align,gradient, gradientColors, ...props }, ref) => {
        const HeadingLevel = order as keyof JSX.IntrinsicElements;
        return (
            <HeadingLevel
                className={cn(className, titleVariants({ order, size, textWrap, line, align, fontFamily, gradient}), gradientColors)}
            >
                {props.children}
            </HeadingLevel>
        );
    }
);

Title.displayName = "Title";

export { Title };

