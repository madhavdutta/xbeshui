import React from "react";
import { cn } from "../../../../utils";
import { ImageProps, imageVariants } from "./image.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";


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
  useXbeshProviderCheck();
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
