import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, getInitials } from "../../../../utils";
import { avatarVariants } from "./avatar.config";
import type { AvatarProps } from "./avatar.d";
<<<<<<< HEAD
import {IconUser} from "@tabler/icons-react";
=======
import { IconUserCircle } from "@tabler/icons-react";
>>>>>>> d3a4c6a05aa9e528e069c64d70501bcc21c72431

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    { className, src, alt, radius, size,fallback, children, color, ...props },
    ref
  ) => {
    const initials = getInitials(alt ?? "");
   
  
  const colorStyle = color ? { color: color } : {};


    return (
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex overflow-hidden",
          avatarVariants({ radius, size }),
          className
        )}
        {...props}
      >
<<<<<<< HEAD
        {fallback ? <IconUser /> : null}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});
=======
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
            className='flex h-full w-full items-center bg-gray-100 justify-center'
          >
           {children || initials || <IconUserCircle color="gray" size={25} />}
          </AvatarPrimitive.Fallback>
        )}
      </AvatarPrimitive.Root>
    );
  }
);
>>>>>>> d3a4c6a05aa9e528e069c64d70501bcc21c72431

Avatar.displayName = "Avatar";

export { Avatar };
