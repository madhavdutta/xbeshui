import { cva, type VariantProps } from "class-variance-authority";
import type { AppShellVariantType } from "./appShellType";

const appShellConfig: AppShellVariantType = {
    variants: {
        variant: {
            default: "app-shell",
            inner: "app-shell-inner",
        },
        layout: {
            default: "app-shell-layout",
            alt: "app-shell-layout-alt",
        },
    },
    defaultVariants: {
        variant: "default",
        layout: "default",
    },
};
export const appShellVariant = cva("bg-background text-primary-foreground flex flex-col w-full", appShellConfig);

export interface appShellProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appShellVariant> {
    variant?: keyof AppShellVariantType["variants"]["variant"];
    layout?: keyof AppShellVariantType["variants"]["layout"];
    Header?: React.ReactNode;
    Footer?: React.ReactNode;
    Navbar?: React.ReactNode;
    Aside?: React.ReactNode;
    viewPort?: {headerHeight: number, footerHeight: number, asideWidth: number, navbarWidth: number}
    withBorder?: boolean;
    fixedHeader?:boolean;
    children?: React.ReactNode;
    shrinkedAside?: boolean;
}
