import { VariantProps, cva } from "class-variance-authority";
import { BlockQuoteVariantsType } from "./blockquoteType";

export const blockQuoteVariant:BlockQuoteVariantsType = {
  variants: {
    size: {
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
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
      "3xl": "leading-10",
      "4xl": "leading-12",
      "5xl": "leading-14",
      "6xl": "leading-16",
      "7xl": "leading-20",
      "8xl": "leading-24",
      "9xl": "leading-28",
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
    defaultVariants: {
      size: "default",
      textWrap: "default",
      line: "default",
      fontFamily: "default",
    },
  },
};

export const blockQuoteVariants = cva(
  "bg-background text-primary-foreground my-5 border-l-2 pl-6 italic text-gray-400",
  blockQuoteVariant
);

export interface BlockQuoteProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof blockQuoteVariants> {
  size: keyof BlockQuoteVariantsType["variants"]["size"];
  textWrap: keyof BlockQuoteVariantsType["variants"]["textWrap"];
  line: keyof BlockQuoteVariantsType["variants"]["line"];
  fontFamily: keyof BlockQuoteVariantsType["variants"]["fontFamily"];
  color?: string; // New prop
  cite?: string; // New prop
  icon?: React.ReactNode; // New prop
  mt?: string; // New prop
}
