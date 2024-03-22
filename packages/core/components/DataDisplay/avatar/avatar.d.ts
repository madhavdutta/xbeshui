import { VariantProps } from "class-variance-authority";

type AvatarSize = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

type AvatarRadius = {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
};

interface AvatarVariantsConfig {
  variants: {
    radius: AvatarRadius;
    size: AvatarSize;
  };
  defaultVariants: {
    radius: keyof AvatarRadius;
    size: keyof AvatarSize;
  };
}

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  radius?: keyof AvatarRadius;
  size?: keyof AvatarSize;
}

export type { AvatarProps, AvatarVariantsConfig };