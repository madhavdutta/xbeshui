import { VariantProps } from "class-variance-authority";
import { titleVariants } from "./title.config";

export type TitleVariantsType = {
  variants: {
    order: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };

    textWrap: {
      default: string;
      wrap: string;
      nowrap: string;
      balance: string;
      pretty: string;
    };

    fontFamily: {
      default: string;
      serif: string;
      mono: string;
      sans: string;
    };
    align: {
      default: string;
      center: string;
      right: string;
      justify: string;
    };

    gradient: {
      default: string;
      lr: string;
      rl: string;
      tb: string;
      bt: string;
      tl: string;
      tr: string;
      bl: string;
      br: string;
    };
  };
  defaultVariants: {
    order: keyof TitleVariantsType["variants"]["order"];
    textWrap: keyof TitleVariantsType["variants"]["textWrap"];
    fontFamily: keyof TitleVariantsType["variants"]["fontFamily"];
    align: keyof TitleVariantsType["variants"]["align"];
    gradient: keyof TitleVariantsType["variants"]["gradient"];
  };
};

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
