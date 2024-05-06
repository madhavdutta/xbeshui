import * as React from "react";
import { cn } from "../../../../utils";
import { textVariants, type TextProps } from "./text.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

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
      fontWeight,
      ...props
    },
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    useXbeshProviderCheck();
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
            fontWeight,
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
