type ButtonType = {
    variants: {
      variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
      };
      size: {
        default: string;
        sm: string;
        md: string;
        lg: string;
        icon: string;
      };
    };
    defaultVariants: {
      variant: string;
      size: string;
    };
  };
    export default ButtonType;