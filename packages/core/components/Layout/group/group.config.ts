import { VariantProps, cva } from "class-variance-authority";
import { GroupVariantType } from "./groupType";
const groupConfig: GroupVariantType = {
  variants: {
    justify: {
      default: "",
      left: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      right: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      center: "items-center",
    },
    gap: {
      default: "gap-2",
      none:"gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-12",
    },
    wrap: {
      default: "flex-nowrap",
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },
    grow: {
      default: "grow-0",
      true: "grow",
      flase: "grow-0",
    },
  },
  defaultVariants: {
    justify: "default",
    align: "center",
    gap: "default",
    wrap: "default",
  },
};
export const groupVariant = cva("text-foreground w-full flex flex-row", groupConfig);

export interface GroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupVariant> {
  asChild?: boolean;
  justify?: keyof GroupVariantType["variants"]["justify"];
  align?: keyof GroupVariantType["variants"]["align"];
  gap?: keyof GroupVariantType["variants"]["gap"];
  wrap?: keyof GroupVariantType["variants"]["wrap"];
  grow?:boolean
}
