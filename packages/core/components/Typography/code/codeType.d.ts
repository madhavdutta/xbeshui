import type { VariantProps } from "class-variance-authority";
import type { codeVariants } from "./code.config";

export interface CodeProps
  extends React.HTMLAttributes<HTMLPreElement>,
    VariantProps<typeof codeVariants> {
  asChild?: boolean;
  color?: string; // Optional color prop
}
