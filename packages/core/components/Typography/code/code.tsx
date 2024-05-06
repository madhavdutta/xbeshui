import * as React from "react";
import { cn } from "../../../../utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { codeVariants } from "./code.config";
import type { CodeProps } from "./codeType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";


const Code = React.forwardRef<HTMLPreElement, CodeProps>(
  ({ className, ...props }, ref) => {
    useXbeshProviderCheck();
    
    const tailwindClasses = `
            bg-input
            block
            w-full
            p-4
            pl-10
            relative
            text-muted-foreground
            text-left
        `;

    const [copied, setCopied] = React.useState(false);

    const copyToClipboard = () => {
      const text = props.children || ""; // Use default value or fallback
      navigator.clipboard.writeText(text.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Revert the icon back to "Copy" after 2 seconds
    };

    return (
      <div className="relative">
        <code
          className={cn(codeVariants.toString(), tailwindClasses, className)}
        >
          <pre ref={ref} {...props}>
            {props.children}
          </pre>
        </code>
        <button
          className="absolute top-0 right-0 m-2 p-1 rounded  text-secondary-foreground"
          onClick={copyToClipboard}
          type="button"
        >
          {copied ? <IconCheck className="text-secondary-foreground" size={16} /> : <IconCopy className="text-secondary-foreground"  size={16} />}
        </button>
      </div>
    );
  }
);

Code.displayName = "Code";

export { Code };
