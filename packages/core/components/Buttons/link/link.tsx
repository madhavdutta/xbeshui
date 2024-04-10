import { forwardRef } from "react";
import { cn } from "../../../../utils";
import { LinkProps, buttonVariants } from "../button/button.config";

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
    ref
  ) => {
    return (
      <a
        className={cn(buttonVariants({ variant,radius, size }), className)}
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
  }
);

Link.displayName = "Link";

export { Link };
