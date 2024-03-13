import * as React from "react"

import { cn } from "../../../utils";
import { cva, type VariantProps } from "class-variance-authority"
import "../Theme/xbeshDefaultUIStyles.css"

const containerJustifyVariant = cva(
    "container mx-auto w-full p-8 max-w-none",
    {
        variants: {
            p: {
                default: "p-8",
                none: "p-0",
                xs: "p-4",
                sm: "p-8",
                md: "p-12",
                lg: "p-16",
                xl: "p-20",
                xxl: "p-24"
            },
            justify: {
                flexStart: "justify-start",
                center: "justify-center",
                spaceBetween: "justify-between",
                flexEnd: "justify-end",
                spaceAround: "justify-around",
            },
            size: {
                default: "w-full",
                xs: "w-5/12",
                sm: "w-6/12",
                md: "w-7/12",
                lg: "w-8/12",
                xl: "w-9/12",
                xxl: "w-10/12",
            },
            defaultVariants: {
                justify: "flexStart",
                fluid: false,
                size: "default",
                p: "default"
            },
        }
    }
)

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerJustifyVariant> {
    justify?: "flexStart" | "center" | "spaceBetween" | "flexEnd" | "spaceAround";
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    p?: "default" | "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"; // Changed from "padding" to "p"
    asChild?: boolean;
    fluid?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, justify, p, size, fluid, ...props }, ref) => {
        return (
            <div
                className={cn(containerJustifyVariant({ justify, size, p, className }), fluid ? "w-full" : "" )}
                ref={ref}
                {...props}
            >
                {props.children}
            </div>
        )
    }
)
Container.displayName = "Container"
export { Container }
