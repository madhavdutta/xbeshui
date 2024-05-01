import * as React from "react";
import { cn } from "../../../../utils";
import { ContainerProps, containerConfig, containerVariant } from "./container.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const getSizeClasses = (size: ContainerProps["size"]) => {
  if (typeof size === "string") {
    return containerConfig.variants.size[size] || "";
  } else if (typeof size === "object") {
    return Object.entries(size)
      .map(([breakpoint, sizeValue]) =>
        breakpoint === "base"
          ? `${sizeValue}:${containerConfig.variants.size[sizeValue as keyof typeof containerConfig.variants.size]}`
          : `${breakpoint}:${containerConfig.variants.size[sizeValue as keyof typeof containerConfig.variants.size]}`
      )
      .join(" ");
  }
  return "";
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, justify, items, p, size, fluid, withBorder, ...props }, ref) => {
    useXbeshProviderCheck();

    const sizeClasses = getSizeClasses(size);

    return (
      <div
        className={cn(
          containerVariant({ justify, items, p, className }),
          sizeClasses,
          fluid ? "w-full" : "",
          withBorder ? "border" : ""
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </div>
    );
  }
);

Container.displayName = "Container";
export { Container };