
export interface labelVariantsType {
  variants: {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      "4xl": string;
      "5xl": string;
      "6xl": string;
      "7xl": string;
      "8xl": string;
      "9xl": string;
    };
    fontFamily: {
      sans: string;
      serif: string;
      mono: string;
    };
    fontWidth: {
      normal: string;
      thin: string;
      light: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    };
  };
  defaultVariants: {
    fontSize: keyof labelVariantsType["variants"]["fontSize"];
    fontFamily: keyof labelVariantsType["variants"]["fontFamily"];
    fontWidth: keyof labelVariantsType["variants"]["fontWidth"];
  };
}


