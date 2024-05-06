import { cn } from "../../../../utils";
import  { imageVariants, type ImageProps } from "./image.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface ImagePropsWithRequiredAlt extends ImageProps {
  alt: string;
}

const Image: React.FC<ImagePropsWithRequiredAlt> = ({
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
      className={cn(imageVariants({ radius, fit }), className)}
      style={style}
      {...props}
      alt={alt}
      aria-label={alt}
    />
  );
};

export { Image };