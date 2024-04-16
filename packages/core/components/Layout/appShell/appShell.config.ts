import { VariantProps, cva } from "class-variance-authority";
import { AppShellVariantType } from "./appShellType";

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
    Header?: React.FC;
    Footer?: React.FC;
    Navbar?: React.FC;
    Aside?: React.FC;
    viewPort?: {headerHeight: number, footerHeight: number, asideWidth: number, navbarWidth: number}
    withBorder?: boolean;
    children?: React.ReactNode;
}
