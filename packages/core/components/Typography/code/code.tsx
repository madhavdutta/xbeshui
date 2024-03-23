import * as React from "react";
import { cn } from "../../../../utils";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { codeVariants } from "./code.config";
import { CodeProps } from "./code.d";


const Code = React.forwardRef<HTMLPreElement, CodeProps>(
  ({ className, color = "gray", ...props }, ref) => {
    const tailwindClasses = `
            ${color === "gray" ? "bg-gray-100" : `bg-${color}-100`}
            block
            w-full
            p-4
            pl-10
            relative
            text-gray-500
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
          className="absolute top-0 right-0 m-2 p-1 rounded  text-gray-800 hover:bg-gray-300"
          onClick={copyToClipboard}
        >
          {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
        </button>
      </div>
    );
  }
);

Code.displayName = "Code";

export { Code };
