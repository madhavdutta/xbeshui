import { VariantProps, cva } from "class-variance-authority";
import { GroupVariantType } from "./groupType";
const groupConfig: GroupVariantType = {
  variants: {
    justify: {
      default: "",
      flexStart: "justify-start",
      center: "justify-center",
      spaceBetween: "justify-between",
      flexEnd: "justify-end",
      spaceAround: "justify-around",
    },
    align: {
      center: "items-center",
    },
    gap: {
      default: "gap-16",
      xxs: "gap-2",
      xs: "gap-4",
      sm: "gap-12",
      md: "gap-16",
      lg: "gap-20",
      xl: "gap-24",
      xxl: "gap-28",
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
export const groupVariant = cva("bg-background text-primary-foreground w-full flex flex-row", groupConfig);

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
