import React from "react";
import { cn } from "../../../../utils";
import { ImageProps, imageVariants } from "./image.config";


const Image: React.FC<ImageProps> = ({
  src,
  alt,
  radius,
  fit,
  width,
  height,
  className,
  ...props
}) => {
  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(imageVariants({ radius, fit }), className)}
      style={style}
      {...props}
    />
  );
};

export { Image };
