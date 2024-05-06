import * as React from "react";
import { cn } from "../../../../utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";

import type { CodeProps } from "./codeType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = React.forwardRef<HTMLDivElement, CodeProps>(
  ({ language, className, ...props }, ref) => {
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
      <div ref={ref} className="relative">
        <SyntaxHighlighter
          language={language}
          style={darcula}
          className={cn(tailwindClasses, className)}
        >
          {props.children}
        </SyntaxHighlighter>
        <button
          className="absolute top-0 right-0 m-2 p-1 rounded  text-secondary-foreground"
          onClick={copyToClipboard}
          type="button"
        >
          {copied ? (
            <IconCheck className="text-primary-foreground" size={16} />
          ) : (
            <IconCopy className="text-primary-foreground" size={16} />
          )}
        </button>
      </div>
    );
  }
);

Code.displayName = "Code";

export { Code };
