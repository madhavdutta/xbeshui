import * as React from "react";
import { cn } from "../../../../utils";
import { TitleProps, titleVariants } from "./title.config";


const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  (
    {
      className,
      order = "h1",
      textWrap,
      fontFamily,
      align,
      gradient,
      gradientColors,
      ...props
    },
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    return (
      <p
        className={cn(
          className,
          titleVariants({
            order,
            textWrap,
            align,
            fontFamily,
            gradient,
          }),
          gradientColors
        )}
        ref={ref}
      >
        {props.children}
      </p>
    );
  }
);

Title.displayName = "Title";

export { Title };
