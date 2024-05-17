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
export const appShellVariant = cva("bg-background font-default text-primary-foreground flex flex-col w-full", appShellConfig);

export interface IAsideProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    isOpenable?: boolean;
    openedAsideComponent?: React.ReactNode;
  }

export interface appShellProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appShellVariant> {
    variant?: keyof AppShellVariantType["variants"]["variant"];
    layout?: keyof AppShellVariantType["variants"]["layout"];
    Header?: React.ReactNode;
    Footer?: React.ReactNode;
    Navbar?: React.ReactNode;
<<<<<<< HEAD
    Aside?: IAsideProps[];
=======
    
    Aside?: React.ReactNode;
>>>>>>> 1dd405f4cb66159a5dd037e1ef5e8943d86c4034
    viewPort?: {headerHeight: number, footerHeight: number, asideWidth: number, navbarWidth: number}
    withBorder?: boolean;
    fixedHeader?:boolean;
    children?: React.ReactNode;
    shrinkedAside?: boolean;
}
