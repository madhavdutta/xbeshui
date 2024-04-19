import { VariantProps, cva } from "class-variance-authority";
import { notificationTimelineVariantConfigType } from "./notificationTimelineType";

const notificationTimelineVariantConfig: notificationTimelineVariantConfigType =
  {
    variants: {
      variant: {
        default: "",
      },
      // bulletSize: {
      //   default: "",
      //   xs: "w-1 h-1",
      //   sm: "w-2 h-2",
      //   md: "w-4 h-4",
      //   lg: "w-5 h-5 -start-3",
      //   xl: "w-8 h-8",
      // },
      lineWidth: {
        default: "border-s-2",
        none: "boorder-s-0",
        xs: "border-s",
        sm: "border-s-2",
        md: "border-s-4",
        lg: "border-s-8",
      },
    },
    defaultVariants: {
      variant: "default",
      // bulletSize: "default",
      lineWidth: "default",
    },
  };

export const notificationTimelineVariants = cva(
  "",
  notificationTimelineVariantConfig
);

export interface TimelineItem {
  label: string;
  date: string;
  title?: string;
  desc?: string;
}

export interface NotificationTimelineProps
  extends VariantProps<typeof notificationTimelineVariants> {
  data: TimelineItem[];
  variant?: keyof notificationTimelineVariantConfigType["variants"]["variant"];
  bulletSize?: "2" | "3" | "4" | "5" | "6";
  lineWidth?: keyof notificationTimelineVariantConfigType["variants"]["lineWidth"];
  activeItem?: number;
}