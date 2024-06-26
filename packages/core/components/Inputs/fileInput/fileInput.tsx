import * as React from "react";

// Utility to concatenate class names

import { cn } from "../../../../utils";
import { fileInputVariants, type FileInputProps } from "./fileInput.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      onFileSelect,
      leftSection,
      rightSection,
      leftSectionWidth = 40,
      rightSectionWidth = 40,
      label,
      width,
      error,
      description,
      labelPosition,
      radius,
      disabled,
      variant,
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const paddingLeft = leftSection ? leftSectionWidth + 12 : 12;
    const paddingRight = rightSection ? rightSectionWidth + 12 : 12;

    const hiddenInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setSelectedFile(file);
        if (onFileSelect) {
          onFileSelect(file);
        }
      }
    };

    return (
      <div className="flex flex-col w-full">
        {error ? (
          <>
            {" "}
            {label && (
              <label
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm font-normal text-red-500",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-red-500 font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {description}
              </div>
            )}
          </>
        ) : (
          <>
            {" "}
            {label && (
              <label
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-secondary-foreground font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <div
                className={cn(
                  "flex items-center gap-2 mb-1 text-sm text-muted-foreground font-normal",
                  labelPosition === "right" && "flex-row-reverse"
                )}
              >
                {description}
              </div>
            )}
          </>
        )}
        <div className="flex items-center w-full relative">
          {leftSection && (
            <div
              className="absolute left-0 inset-y-0 text-secondary-foreground flex items-center justify-center"
              style={{ width: leftSectionWidth }}
            >
              {leftSection}
            </div>
          )}
          <input
            {...props}
            ref={hiddenInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
            disabled={disabled}
          />
          <input
            {...props}
            ref={ref}
            type="text"
            className={cn(
              fileInputVariants({ variant, width, error, radius, className })
            )}
            value={selectedFile?.name || ""}
            onClick={() => hiddenInputRef.current?.click()}
            readOnly
            style={{
              paddingLeft: `${paddingLeft}px`,
              paddingRight: `${paddingRight}px`,
            }}
          />
          {rightSection && (
            <div
              className="absolute right-0 inset-y-0 text-secondary-foreground flex items-center justify-center"
              style={{ width: rightSectionWidth }}
            >
              {rightSection}
            </div>
          )}
        </div>
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };
