import * as React from "react";
import { Button } from "../button/button";
import { ButtonConfig } from "../button/button.config";
import { List, ListItem } from "../..";


interface FileButtonProps {
  allowedFileTypes?: string[];
  variant?: keyof typeof ButtonConfig.variants.variant;
  size?: keyof typeof ButtonConfig.variants.size;
  radius?: keyof typeof ButtonConfig.variants.radius;
  children?: React.ReactNode;
  onFileSelect: (files: File[] | null) => void; // Change type to FileList
}

const FileButton = React.forwardRef<HTMLButtonElement, FileButtonProps>(
  ({ children, onFileSelect, variant, size, radius, allowedFileTypes }, ref) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [filesData, setFilesData] = React.useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        // const allowedFormats = ["image/png", "image/jpeg", "image/svg+xml"];
        const validFiles = Array.from(files).filter((file) =>
        allowedFileTypes?.includes(file.type)
        );

        if (validFiles.length !== files.length) {
          const invalidFiles = Array.from(files).filter(
            (file) => !allowedFileTypes?.includes(file.type)
          );
          // Handle invalid files
          console.error(
            "Invalid file format: ",
            invalidFiles.map((file) => file.name)
          );
        }

        setFilesData(validFiles);
        onFileSelect(validFiles);
      }
    };

    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    return (
      <div className="flex flex-col items-center">
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          multiple // Allow multiple file selection
        />
        <Button variant={variant} radius={radius} size={size} onClick={handleClick} ref={ref}>
          {children}
        </Button>
        <List>
          {filesData.map((fileData, index) => (
            <ListItem key={index}>{fileData.name}</ListItem>
          ))}
        </List>
      </div>
    );
  }
);

FileButton.displayName = "FileButton";

export { FileButton };