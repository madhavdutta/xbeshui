import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const textVariants = cva("leading-6, font-normal, text-black, text-base", {
  variants: {
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
    },
    textWrap: {
      default: "text-wrap",
      wrap: "text-wrap",
      nowrap: "text-nowrap",
      balance: "text-balance",
      pretty: "text-pretty",
    },
    line: {
      default: "leading-normal",
      xs: "leading-4",
      sm: "leading-5",
      md: "leading-6",
      lg: "leading-7",
      xl: "leading-8",
      xxl: "leading-9",
    },
    fontFamily: {
      default: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
      sans: "font-sans",
    },
    align: {
      default: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    textTransform: {
      default: "normal-case",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    textOverflow: {
      default: "",
      truncate: "text-ellipsis overflow truncate",
      ellipsis: "text-ellipsis",
      clip: "text-clip",
    },
    lineClamp: {
      default: "",
      overflow: "hidden",
    },
  },
  defaultVariants: {
    size: "default",
    textWrap: "default",
    line: "default",
    fontFamily: "default",
    textTransform: "default",
    textOverflow: "default",
    lineClamp: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
  size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  textWrap?: "default" | "wrap" | "nowrap" | "balance" | "pretty";
  line?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  fontFamily?: "default" | "serif" | "mono" | "sans";
  align?: "default" | "center" | "right" | "justify";
  textTransform?: "default" | "uppercase" | "lowercase" | "capitalize";
  textOverflow?: "default" | "truncate" | "ellipsis" | "clip";
  lineClamp?: "default" | "overflow" | null | undefined;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      asChild,
      size,
      textWrap,
      line,
      fontFamily,
      align,
      textTransform,
      textOverflow,
      lineClamp,
      ...props
    },
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    return (
      <p
        className={
          (
          cn(
            
            textVariants({
              size,
              textWrap,
              line,
              fontFamily,
              align,
              textTransform,
              textOverflow,
              className
            })
          ))
        }
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
