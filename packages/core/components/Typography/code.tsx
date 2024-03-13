import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const textVariants = cva("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold");

export interface CodeProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
    asChild?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
    ({ className,  ...props }, ref: React.Ref<HTMLElement>) => {
        return (
            <code
                className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-normal p-3", className)}
                ref={ref}
                {...props}
            >
               <pre>{props.children}</pre>
            </code>
        );
    }
);

Code.displayName = "Code";

export { Code };
