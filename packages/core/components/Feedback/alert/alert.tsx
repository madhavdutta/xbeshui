import * as React from "react";
import { IconRocket } from "@tabler/icons-react";
import { cn } from "../../../../utils/index";
import { Stack } from "../../Layout/stack/stack";
import { Group } from "../../Layout/group/group";
import { alertPropsConfig, type AlertPropsType } from "./alert.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

interface AlertComponent extends React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & AlertPropsType> {
  Title: typeof AlertTitle;
  Description: typeof AlertDescription;
}

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  )
);

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);

AlertDescription.displayName = "AlertDescription";

const Alert = React.forwardRef<HTMLDivElement, AlertPropsType>(
  ({ className, variant, title, message, icon, ...props }, ref) => {
    useXbeshProviderCheck();

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertPropsConfig({ variant, className }), "flex items-start justify-center flex-col z-10")}
        {...props}
      >
        <Group gap="xs">
          {icon || <IconRocket size={24} />}
          <Stack justify="center">
            {title && <Alert.Title>{title}</Alert.Title>}
            {message && <Alert.Description>{message}</Alert.Description>}
          </Stack>
        </Group>
      </div>
    );
  }
) as unknown as AlertComponent;

Alert.displayName = "Alert";
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;

export { Alert };