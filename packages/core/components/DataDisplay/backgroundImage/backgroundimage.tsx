import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const backgroundImageVariants = cva("", {
  // Define or keep existing variants
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
      contain: "bg-contain",
      cover: "bg-cover",
      fill: "bg-fill",
      none: "bg-none",
      scaleDown: "bg-scale-down",
    },
  },
  defaultVariants: {
    radius: "default",
    fit: "cover",
  },
});

// Extend the interface to include 'width', 'height', and 'fit'
interface BackgroundImageProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof backgroundImageVariants> {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  radius,
  fit,
  width,
  height,
  className,
  ...props
}) => {
  // Prepare inline styles for width, height, and backgroundImage
  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
    backgroundImage: `url(${src})`,
    backgroundPosition: 'center', // Adjust as needed
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className={cn(backgroundImageVariants({ radius, fit }), className)}
      style={style} // Apply inline styles
      aria-label={alt}
      {...props}
    />
  );
};

export { BackgroundImage };
