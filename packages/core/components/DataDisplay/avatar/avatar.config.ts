import { cva, type VariantProps } from "class-variance-authority";
import type {
  AvatarRadiusType,
  AvatarSizeType,
  IndicatorPositionType,
  AvatarVariantsConfigType,
} from "./avatarType";

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
      default: "h-9 w-9 text-xs",
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-16 w-16 text-xl",
      xxl: "h-20 w-20 text-2xl",
    },
  },
  defaultVariants: {
    radius: "default",
    size: "default",
  },
};

export const avatarVariants = cva(
  "bg-transparent font-default text-foreground",
  avatarConfig,
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  radius?: keyof AvatarRadiusType;
  size?: keyof AvatarSizeType;
  indicatorColor?: string;
  indicatorPosition?: IndicatorPositionType;
}