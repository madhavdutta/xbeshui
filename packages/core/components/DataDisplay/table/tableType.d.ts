export interface TableVariantsConfigType {
  variants: {
    size: {
      default: string;
      fixed: string;
    };
    borderCollapse: {
      default: string;
      collapse: string;
      separate: string;
    };
  };
  defaultVariants: {
    size: keyof TableVariantsConfigType["variants"]["size"];
    borderCollapse: keyof TableVariantsConfigType["variants"]["borderCollapse"];
  };
}
