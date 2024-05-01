import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { IconRocket } from "@tabler/icons-react";
import { cn } from "../../../../utils/index";
import { Stack } from "../../Layout/stack/stack";
import { Group } from "../../Layout/group/group";
import { AlertPropsType, alertPropsConfig } from "./alert.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface AlertComponent<T extends React.ElementType = "div">
  extends React.ForwardRefExoticComponent<
    Omit<React.ComponentPropsWithoutRef<T>, "ref"> &
      VariantProps<typeof alertPropsConfig> &
      AlertPropsType &
      React.RefAttributes<HTMLDivElement>
  > {
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
}

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-medium text-secondary-foreground leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm text-secondary-foreground [&_p]:leading-relaxed",
      className
    )}
    {...props}
  />
));

AlertDescription.displayName = "AlertDescription";

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof alertPropsConfig> &
    AlertPropsType
>(({ className, variant, title, message, icon, ...props }, ref) => {
  useXbeshProviderCheck();
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        alertPropsConfig({ variant }),
        "flex items-start justify-center flex-col z-10",
        className
      )}
      {...props}
    >
      <Group gap="xs">
        {icon || (
          <IconRocket className="text-secondary-foreground" size={24} />
        )}
        <Stack justify="center">
          {title && <Alert.Title>{title}</Alert.Title>}
          {message && <Alert.Description>{message}</Alert.Description>}
        </Stack>
      </Group>
    </div>
  );
}) as AlertComponent;

Alert.displayName = "Alert";

(Alert as AlertComponent).Title = AlertTitle;
(Alert as AlertComponent).Description = AlertDescription;

export { Alert };