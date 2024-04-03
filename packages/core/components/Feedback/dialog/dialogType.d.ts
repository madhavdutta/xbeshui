import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogOverlayType = React.ElementRef<typeof DialogPrimitive.Overlay> &
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
type DialogContentType = React.ElementRef<typeof DialogPrimitive.Content> &
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
type DialogTitleType = React.ElementRef<typeof DialogPrimitive.Title> &
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
type DialogDescriptionType = React.ElementRef<
  typeof DialogPrimitive.Description
> &
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;

  type DialogCommonType = React.HTMLAttributes<HTMLDivElement>

export {
  DialogOverlayType,
  DialogContentType,
  DialogTitleType,
  DialogDescriptionType,
  DialogCommonType
};
