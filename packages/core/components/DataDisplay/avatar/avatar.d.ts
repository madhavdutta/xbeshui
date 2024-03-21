import { VariantProps } from "class-variance-authority";

export type AvatarSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type AvatarRadius = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface AvatarVariantsConfig {
  variants: {
    radius: AvatarRadius;
    size: AvatarSize;
  };
  defaultVariants: {
    radius: keyof AvatarRadius;
    size: keyof AvatarSize;
  };
}

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  radius?: keyof AvatarRadius;
  size?: keyof AvatarSize;
}
