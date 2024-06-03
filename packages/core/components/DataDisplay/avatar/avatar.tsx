import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, getInitials } from "../../../../utils";
import { avatarVariants, type AvatarProps } from "./avatar.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IconMoodSmile } from "@tabler/icons-react";
import type { IndicatorPositionType } from "./avatarType";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    {
      className,
      src,
      alt,
      radius,
      size,
      fallback,
      children,
      color,
      indicatorColor,
      indicatorPosition = "bottom-right",
      ...props
    },
    ref,
  ) => {
    useXbeshProviderCheck();
    const initials = getInitials(alt ?? "");
    const colorStyle = color ? { color: color } : {};

    const indicatorPositionClasses: Record<IndicatorPositionType, string> = {
		"top-left": "-top-0.5 -left-0.5",
		"top-right": "-top-0.5 -right-0.5",
		"bottom-left": "-bottom-0.5 -left-0.5",
		"bottom-right": "-bottom-0.5 -right-0.5",
		"top-center": "-top-0.5 left-1/2 transform -translate-x-1/2",
		"bottom-center": "-bottom-0.5 left-1/2 transform -translate-x-1/2",
		"left-center": "top-1/2 -left-0.5 transform -translate-y-1/2",
		"right-center": "top-1/2 -right-0.5 transform -translate-y-1/2",
	  };

    const isColorClass = indicatorColor?.startsWith("bg-");

    return (
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex",
            avatarVariants({ radius, size }),
            className,
          )}
          {...props}
        >
          {src ? (
            <AvatarPrimitive.Image
			className={cn(
				"h-full w-full object-cover",
				avatarVariants({ radius, size }),
				className,
			  )}
              src={src}
              alt={alt ?? "Avatar"}
            />
          ) : fallback ? (
            <AvatarPrimitive.Image
			  className={cn(
				"h-full w-full object-cover",
				avatarVariants({ radius, size }),
				className,
			  )}
              src={fallback}
              alt={alt ?? "Avatar"}
            />
          ) : (
            <AvatarPrimitive.Fallback
              style={colorStyle}
			  className={cn(
				"flex h-full w-full items-center hover:bg-accent cursor-pointer text-foreground border justify-center",
				avatarVariants({ radius, size }),
				className,
			  )}
            >
              {children || initials || <IconMoodSmile size={25} stroke={1} />}
            </AvatarPrimitive.Fallback>
          )}
          {indicatorColor && (
            <span
              className={cn(
                "absolute w-3 h-3 rounded-full",
                indicatorPositionClasses[indicatorPosition],
                isColorClass ? indicatorColor : "",
              )}
              style={!isColorClass ? { backgroundColor: indicatorColor } : {}}
            />
          )}
        </AvatarPrimitive.Root>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };