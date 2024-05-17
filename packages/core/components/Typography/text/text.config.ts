import { cva, type VariantProps } from "class-variance-authority";
import type { TextVariantsType } from "./textType";

const textConfig:TextVariantsType= {
  variants: {
    size: {
      base: "text-base",
      default: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
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
      clamp2: "clamp-2",
      clamp3: "clamp-3",
      clamp4: "clamp-4",
      clamp5: "clamp-5",
      clamp6: "clamp-6",
      clamp7: "clamp-7",
      clamp8: "clamp-8",
      clamp9: "clamp-9",
      clamp10: "clamp-10",
      clamp11: "clamp-11",
      clamp12: "clamp-12",
      clamp13: "clamp-13",
      clamp14: "clamp-14",
      clamp15: "clamp-15",
      clamp16: "clamp-16",
      clamp17: "clamp-17",
      clamp18: "clamp-18",
      clamp19: "clamp-19",
      clamp20: "clamp-20",
    },
    fontWeight: {
      default: "font-normal",
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    size: "default",
    textWrap: "default",
    line: "default",
    align: "default",
    fontFamily: "default",
    textTransform: "default",
    textOverflow: "default",
    lineClamp: "default",
    fontWeight: "default",
  },
}

export const textVariants = cva(
  "text-secondary-foreground font-default leading-6 font-normal text-base",
  textConfig
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  size?: keyof TextVariantsType["variants"]["size"];
  textWrap?: keyof TextVariantsType["variants"]["textWrap"];
  line?: keyof TextVariantsType["variants"]["line"];
  align?: keyof TextVariantsType["variants"]["align"];
  fontFamily?: keyof TextVariantsType["variants"]["fontFamily"];
  textTransform?: keyof TextVariantsType["variants"]["textTransform"];
  textOverflow?: keyof TextVariantsType["variants"]["textOverflow"];
  lineClamp?: keyof TextVariantsType["variants"]["lineClamp"];
  fontWeight?: keyof TextVariantsType["variants"]["fontWeight"];
}
