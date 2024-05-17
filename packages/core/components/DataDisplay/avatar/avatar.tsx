import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn, getInitials } from "../../../../utils";
import { avatarVariants, type AvatarProps } from "./avatar.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { IconMoodSmile } from "@tabler/icons-react";


const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(
	(
		{ className, src, alt, radius, size, fallback, children, color, ...props },
		ref,
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
						className,
					)}
					{...props}
				>
					{src ? (
						<AvatarPrimitive.Image
							className="aspect-square h-full w-full object-cover"
							src={src}
							alt={alt ?? "Avatar"}
						/>
					) : fallback ? (
						<AvatarPrimitive.Image
							className="aspect-square h-full w-full object-cover"
							src={fallback}
							alt={alt ?? "Avatar"}
						/>
					) : (
						<AvatarPrimitive.Fallback
							style={colorStyle}
							className="flex h-full w-full items-center hover:bg-accent cursor-pointer text-foreground border rounded justify-center"
						>
							{children || initials || (
								<IconMoodSmile size={25} stroke={1.5} />
								
							)}
						</AvatarPrimitive.Fallback>
					)}
				</AvatarPrimitive.Root>
			</div>
		);
	},
);

Avatar.displayName = "Avatar";

export { Avatar };
