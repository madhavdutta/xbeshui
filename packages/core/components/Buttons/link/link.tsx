import { forwardRef } from "react";
import { cn } from "../../../../utils";
import { buttonVariants, type LinkProps } from "../button/button.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
	(
		{
			className,
			variant,
			size,
			leftSection,
			radius,
			rightSection,
			href,
			target,
			children,
			...props
		},
		ref,
	) => {
		useXbeshProviderCheck();
		return (
			<a
				className={cn(buttonVariants({ variant, radius, size }), className)}
				href={href}
				target={target}
				ref={ref}
				{...props}
			>
				{leftSection && <span className="mr-2">{leftSection}</span>}
				{children}
				{rightSection && <span className="ml-2">{rightSection}</span>}
			</a>
		);
	},
);

Link.displayName = "Link";

export { Link };
