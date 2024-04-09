import { VariantProps, cva } from "class-variance-authority";
import { AvatarRadiusType, AvatarSizeType, AvatarVariantsConfigType } from "./avatarType";

const avatarConfig: AvatarVariantsConfigType = {
  variants: {
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    size: {
      default: "h-10 w-10",
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-14 w-14",
      xl: "h-20 w-20",
    },
  },
  defaultVariants: {
    radius: "default",
    size: "default",
  },
};

export const avatarVariants = cva("bg-background text-primary-foreground", avatarConfig);

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  radius?: keyof AvatarRadiusType;
  size?: keyof AvatarSizeType;
}