import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";
import { IconX } from "@tabler/icons-react";

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  id: string;
  withCloseButton?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  autoClose?: number;
  title?: string;
  message?: string;
  color?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  variant?: "default" | "destructive";
  position?:
    | "default"
    | "top"
    | "topleft"
    | "topRight"
    | "bottom"
    | "bottomleft"
    | "bottomRight";
}

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
      position: {
        default: "fixed top-10",
        top: "fixed top-10",
        topleft: "fixed left-10 top-10",
        topRight: "fixed right-10 top-10",
        bottom: "fixed bottom-10",
        bottomleft: "fixed left-10 bottom-10",
        bottomRight: "fixed right-10 bottom-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      id,
      withCloseButton = false,
      onClose,
      onOpen,
      autoClose,
      title,
      message,
      color,
      icon,
      className,
      loading = false,
      variant,
      position,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
      if (onOpen) onOpen();

      if (autoClose) {
        const timer = setTimeout(() => {
          setVisible(false);
          if (onClose) onClose();
        }, autoClose);

        return () => clearTimeout(timer);
      }

      return undefined;
    }, []);
    const c =
      color === "green"
        ? "flex items-center border-l-8 border-green-600 py-4 justify-between"
        : "flex items-center border-l-8 border-red-600 py-4 justify-between";
    const handleClose = () => {
      setVisible(false);
      if (onClose) onClose();
    };

    if (!visible) return null;

    return (
      <div
        id={id}
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant, position }),
          className,
          c,
          "w-96 drop-shadow-lg"
        )}
        style={{ ...props.style }}
        {...props}
      >
        <div className="flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          <div>
            {title && <AlertTitle>{title}</AlertTitle>}
            {message && <AlertDescription>{message}</AlertDescription>}
          </div>
        </div>
        {withCloseButton && (
          <button onClick={handleClose} aria-label="Close" className="">
            <IconX stroke={1.5} />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-2 font-semibold leading-none tracking-tight text-gray-900",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-sm [&_p]:leading-relaxed font-normal text-gray-500",
      className
    )}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
