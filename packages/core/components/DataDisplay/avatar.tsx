import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils";

const avatarVariants = cva("", {
  variants: {
    radius: {
      default: "rounded-none",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-full",
    },
    size: {
      default: "size-10",
      xs: "size-6",
      sm: "size-8",
      md: "size-10",
      lg: "size-14",
      xl: "size-20",
    },
  },
  defaultVariants: {
    // variant: "default",
    radius: "default",
    size: "default",
  },
});

export interface avatarProps
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  radius?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
 
}


const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & avatarProps
>(({ className, src, alt, radius, size, fallback, ...props }, ref) => {
  const imageProps = {
    src: src ?? "",
    alt: alt ?? "Avatar",
  };

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn("relative flex overflow-hidden rounded-full",  avatarVariants({
        radius,
        size,
        className,
      }))}
      {...props}
    >
      <AvatarPrimitive.Image
        className={cn("aspect-square h-full w-full")}
        { ...imageProps}
      />
      <AvatarPrimitive.Fallback
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted"
        )}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar };
