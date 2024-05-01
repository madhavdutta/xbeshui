import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, getInitials } from "../../../../utils";
import { AvatarProps, avatarVariants } from "./avatar.config";import { IconUserCircle } from "@tabler/icons-react";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    { className, src, alt, radius, size,fallback, children, color, ...props },
    ref
  ) => {
    useXbeshProviderCheck();
    const initials = getInitials(alt ?? "");
   
  
  const colorStyle = color ? { color: color } : {};


    return (
      <div className={size}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex overflow-hidden",
          avatarVariants({ radius, size }),
          className
        )}
        {...props}
      >
        {src ? (
          <AvatarPrimitive.Image
            className="aspect-square h-full w-full object-cover"
            src={src}
            alt={alt ?? "Avatar"}
          />
        ) :
        fallback ? (
          <AvatarPrimitive.Image
            className="aspect-square h-full w-full object-cover"
            src={fallback}
            alt={alt ?? "Avatar"}
          />
        ) : (
         <AvatarPrimitive.Fallback
            style={colorStyle}
            className='flex h-full w-full items-center bg-background text-foreground border rounded justify-center'
          >
           {children || initials || <IconUserCircle color="gray" size={25} />}
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
