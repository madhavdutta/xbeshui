import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const imageVariants = cva("", {
  // Keep the existing variants for radius, size, and fit
  variants: {
    radius: {
      default: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down",
    },
  },
  defaultVariants: {
    radius: "default",
    fit: "cover",
  },
});


interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, VariantProps<typeof imageVariants> {
  width?: string | number;
  height?: string | number;
  radius?: 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scaleDown';
}

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
  // Prepare inline styles for width and height
  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  };

  return (
    <img
      src={src}
      alt={alt}
      className={cn(imageVariants({ radius, fit }), className)}
      style={style} // Apply inline styles
      {...props}
    />
  );
};

export { Image };
