import type * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogOverlayType = React.ElementRef< DialogPrimitive.Overlay> &
  React.ComponentPropsWithoutRef< DialogPrimitive.Overlay>;
type DialogContentType = React.ElementRef< DialogPrimitive.Content> &
  React.ComponentPropsWithoutRef< DialogPrimitive.Content>;
type DialogTitleType = React.ElementRef< DialogPrimitive.Title> &
  React.ComponentPropsWithoutRef< DialogPrimitive.Title>;
type DialogDescriptionType = React.ElementRef<
   DialogPrimitive.Description
> &
  React.ComponentPropsWithoutRef< DialogPrimitive.Description>;

  type DialogCommonType = React.HTMLAttributes<HTMLDivElement>

export type {
  DialogOverlayType,
  DialogContentType,
  DialogTitleType,
  DialogDescriptionType,
  DialogCommonType
};
