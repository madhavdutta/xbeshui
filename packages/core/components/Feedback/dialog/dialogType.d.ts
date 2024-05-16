import type * as DialogPrimitive from "@radix-ui/react-dialog";

export interface dialogVarientConfigType {
  variants: {
    size: {
      default: string;
      full: string;
      xl: string;
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    radius: {
      default: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
  };
  defaultVariants: {
    size: keyof dialogVarientConfigType["variants"]["size"];
    radius: keyof dialogVarientConfigType["variants"]["radius"];
  };
}

type DialogOverlayType = React.ElementRef<DialogPrimitive.Overlay> &
  React.ComponentPropsWithoutRef<DialogPrimitive.Overlay>;
type DialogContentType = React.ElementRef<DialogPrimitive.Content> &
  React.ComponentPropsWithoutRef<DialogPrimitive.Content>;
type DialogTitleType = React.ElementRef<DialogPrimitive.Title> &
  React.ComponentPropsWithoutRef<DialogPrimitive.Title>;
type DialogDescriptionType = React.ElementRef<DialogPrimitive.Description> &
  React.ComponentPropsWithoutRef<DialogPrimitive.Description>;

type DialogCommonType = React.HTMLAttributes<HTMLDivElement>;

export type {
  DialogOverlayType,
  DialogContentType,
  DialogTitleType,
  DialogDescriptionType,
  DialogCommonType,
};
