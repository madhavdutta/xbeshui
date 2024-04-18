import { VariantProps, cva } from "class-variance-authority";
import { notificationTimelineVariantConfigType } from "./notificationTimelineType";

const notificationTimelineVariantConfig:notificationTimelineVariantConfigType = {
  variants: {
    variant: {
      default: "",
    },
    bullet: {
      default: "rounded-none",
      xs: "rounded",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
    },
    lineWidth: {
      default: "border-s-2",
      xs: "border-s",
      md: "border-s-2",
      lg: "border-s-4",
      xl: "border-s-8",
    },
  },
  defaultVariants: {
    variant: "default",
    bullet: "default",
    lineWidth: "default",
  },
};

export const progressVariants = cva(notificationTimelineVariantConfig);

export interface ProgressProps extends VariantProps<typeof progressVariants> {
  variant: keyof notificationTimelineVariantConfigType["variants"]["variant"];
  bullet: keyof notificationTimelineVariantConfigType["variants"]["bullet"];
  lineWidth: keyof notificationTimelineVariantConfigType["variants"]["lineWidth"];
}
