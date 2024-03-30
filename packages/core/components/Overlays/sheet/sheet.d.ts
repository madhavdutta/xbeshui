export interface sheetVarientConfigType {
  variants: {
    side: {
      default: string;
      top: string;
      bottom: string;
      left: string;
      right: string;
    };
    size: {
      default: string;
      full: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    fontFamily: {
      default: string;
      serif: string;
      mono: string;
      sans: string;
    };
  };
  defaultVariants: {
    side: keyof sheetVarientConfigType["variants"]["side"];
    size: keyof sheetVarientConfigType["variants"]["size"];
    fontFamily: keyof sheetVarientConfigType["variants"]["fontFamily"];
  };
}

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  children?: React.ReactNode;
  className?: string;
  side?: keyof sheetVarientConfigType["variants"]["side"];
  size?: keyof sheetVarientConfigType["variants"]["size"];
  fontFamily?: keyof sheetVarientConfigType["variants"]["fontFamily"];
}
