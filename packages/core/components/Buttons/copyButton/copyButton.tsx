import React, { useEffect } from "react";
import { Button } from "../..";
import type { ButtonConfig } from "../button/button.config";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { cn } from "../../../../utils";

interface CopyButtonType {
  value?: string;
  children?: React.ReactNode;
  variant?: keyof typeof ButtonConfig.variants.variant;
  size?: keyof typeof ButtonConfig.variants.size;
  radius?: keyof typeof ButtonConfig.variants.radius;
  className?: string;
  successColor?: string;
  buttonMessage?:boolean;
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonType>(
  (
    { className, children, variant, size, radius, value, successColor, buttonMessage },
    ref
  ) => {
    useXbeshProviderCheck();
    const btnColor = successColor ? successColor : "success";

    const [copied, setCopied] = React.useState(false);

    useEffect(() => {
      if (copied) {
        const timeout = setTimeout(() => {
          setCopied(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }, [copied]);

    const copyToClipboard = () => {
      if (value) {
        navigator.clipboard.writeText(value).then(() => {
          setCopied(true);
          console.log("Copied to clipboard:", value);
        });
      }
    };

    return (
      // <Stack gap="xxs" align="center" justify="center">
      <Button
        className={cn(className, copied && btnColor)}
        variant={variant}
        radius={radius}
        size={size}
        onClick={copyToClipboard}
        ref={ref}
        leftSection={
          copied ? (
            <IconCheck size={20} stroke={1.5} />
          ) : (
            <IconCopy
              size={size === "xs" || size === "sm" ? 16 : 20}
              stroke={1.5}
            />
          )
        }
      >
		{buttonMessage ? copied ? "Copied" : children || "Copy" : copied ? children : children}

		
      </Button>
      // {copied && <Text size="xs" color="success">Copied to clipboard</Text>}
      // </Stack>
    );
  }
);

CopyButton.displayName = "CopyButton";

export { CopyButton };
