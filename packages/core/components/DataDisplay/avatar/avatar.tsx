import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../../../utils";
import { avatarVariants } from "./avatar.config";
import type { AvatarProps } from "./avatar.d";
import {IconUser} from "@tabler/icons-react";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, src, alt, radius, size, fallback, ...props }, ref) => {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn("relative flex overflow-hidden", avatarVariants({ radius, size }), className)}
      {...props}
    >
      <AvatarPrimitive.Image
        className="aspect-square h-full w-full object-cover"
        src={src ?? ""}
        alt={alt ?? "Avatar"}
      />
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center bg-muted text-white"
      >
        {fallback ? <IconUser /> : null}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = "Avatar";

export { Avatar };
