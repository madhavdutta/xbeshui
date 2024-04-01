import * as React from "react"
import {  type VariantProps } from "class-variance-authority"
import { IconRocket } from "@tabler/icons-react"
import { cn } from "../../../../utils/index"
import { Stack } from "../../Layout/stack/stack"
import { Group } from "../../Layout/group/group"
import { alertPropsConfig } from "./alert.config"
import { AlertPropsType } from "./alert.d"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertPropsConfig> & AlertPropsType
>(({ className, variant, title, message, icon,  ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertPropsConfig({ variant }), "flex items-start justify-center flex-col", className)}
    {...props}
  >
    <Group gap="xs">
    {icon || <IconRocket size={24} />}
    <Stack justify="center">
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>
      {message}
    </AlertDescription>
    </Stack>
    </Group>
  </div>
))


Alert.displayName = "Alert"

export { Alert,AlertTitle,AlertDescription }
