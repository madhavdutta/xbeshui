import React from "react";
import { cn } from "../../../../utils";
import { BackgroundImageProps, backgroundImageVariants } from "./backgroundImage.config";

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  radius,
  fit = "cover",
  width = 300,
  height = 300,
  className,
  children,
  ...props
}) => {
  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
    backgroundImage: `url(${src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Ensure children are positioned relative to this div
  } as React.CSSProperties;

  return (
    <div
      className={cn(backgroundImageVariants({ radius, fit }), className)}
      style={style}
      aria-label={alt}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

BackgroundImage.displayName = "BackgroundImage";

export { BackgroundImage };
