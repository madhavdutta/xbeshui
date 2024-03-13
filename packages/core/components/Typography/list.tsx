import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";


const listVariants = cva(
    "list-none",
    {
        "variants": {
            isOrdered: {
                "default": false,
                "true": true,
                "false": false
            },
            type: {
                "default": "list-none",
                "none": "list-none",
                "disc": "list-disc",
                "decimal": "list-decimal"
            },
            fontSize: {
                "default": "text-base",
                "xs": "text-xs",
                "sm": "text-sm",
                "md": "text-base",
                "lg": "text-lg",
                "xl": "text-xl",
                "xxl": "text-2xl",
            },
            position: {
                default: "list-inside",
                inside: "list-inside",
                outside: "list-outside",
            }
        },
        defaultVariants: {
            "isOrdered": "default",
            "type": "default",
            "fontSize": "default",
            "position": "default"
        },
    },

);


export interface ListProps extends React.HTMLAttributes<HTMLOListElement>, VariantProps<typeof listVariants> {
    asChild?: boolean;
    type?: "default" | "none" | "disc" | "decimal";
    fontSize?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    position?: "default" | "inside" | "outside";
    children: React.ReactNode;
    isOrdered?: boolean;
}

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    className?: string;
}

// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
    ({ className, ...props }, ref: React.Ref<HTMLLIElement>) => {
        return (
            <li className={className} {...props} ref={ref}>
                {props.children}
            </li>
        );
    }
);


const List = React.forwardRef<HTMLOListElement, ListProps>(
    ({ className, type, fontSize, position, isOrdered, ...props }, ref: React.Ref<HTMLOListElement>) => {
        return (
            isOrdered ? <ol
                className={cn(className, listVariants({ type, fontSize, position }))}
                {...props}
                ref={ref}
            >
                {props.children}
            </ol> :
                <ul
                    className={cn(className, listVariants({ type, fontSize, position }))}
                    {...props}
                >
                    {props.children}
                </ul>
        );
    }
);

List.displayName = "List";

export { List, ListItem };
