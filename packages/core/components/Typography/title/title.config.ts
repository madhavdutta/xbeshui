import { cva, type VariantProps } from "class-variance-authority";
import type { TitleVariantsType } from "./titleType";

const titleConfig: TitleVariantsType = {
  variants: {
    order: {
      h1: "text-6xl leading-14 font-bold",
      h2: "text-5xl leading-10 font-semibold",
      h3: "text-4xl leading-9 font-semibold",
      h4: "text-3xl leading-9 font-semibold",
      h5: "text-2xl leading-8 font-semibold",
      h6: "text-xl leading-7 font-semibold",
    },
    textWrap: {
      default: "text-wrap",
      wrap: "text-wrap",
      nowrap: "text-nowrap",
      balance: "text-balance",
      pretty: "text-pretty",
    },
    fontFamily: {
      default: "font-default",
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
    gradient: {
      default: "",
      lr: "bg-gradient-to-r from-red-500 to-black text-transparent bg-clip-text",
      rl: "bg-gradient-to-l bg-clip-text",
      tb: "bg-gradient-to-b bg-clip-text",
      bt: "bg-gradient-to-t bg-clip-text",
      tl: "bg-gradient-to-tl bg-clip-text",
      tr: "bg-gradient-to-tr bg-clip-text",
      bl: "bg-gradient-to-bl bg-clip-text",
      br: "bg-gradient-to-br bg-clip-text",
    },
  },
  defaultVariants: {
    order: "h1",
    textWrap: "default",
    fontFamily: "default",
    align: "default",
    gradient: "default",
  },
};

export const titleVariants = cva(
  "font-normal font-default",
  titleConfig
);
export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof titleVariants> {
  asChild?: boolean;
  order?: keyof TitleVariantsType["variants"]["order"];
  textWrap?: keyof TitleVariantsType["variants"]["textWrap"];
  fontFamily?: keyof TitleVariantsType["variants"]["fontFamily"];
  align?: keyof TitleVariantsType["variants"]["align"];
  gradient?: keyof TitleVariantsType["variants"]["gradient"];
  gradientColors?: string;
}
