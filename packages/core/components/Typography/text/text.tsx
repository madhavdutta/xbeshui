import * as React from "react";
import { cn } from "../../../../utils";
import { TextProps } from "./textType";
import { textVariants } from "./text.config";

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      size,
      textWrap,
      line,
      fontFamily,
      align,
      lineClamp,
      textTransform,
      textOverflow,
      ...props
    },
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    return (
      <p
        className={cn(
          textVariants({
            size,
            textWrap,
            line,
            fontFamily,
            lineClamp,
            align,
            textTransform,
            textOverflow,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </p>
    );
  }
);

Text.displayName = "Text";

export { Text };
