import React, { useState } from "react";
import {
  IconUpload,
  IconX,
  IconFileTypeXls,
  IconExclamationCircle,
} from "@tabler/icons-react";
import { Card, Text, Stack, TextInput, Button, Group, Progress } from "../..";

type UploadedFile = {
  fileName: string;
  fileSize: string;
};

const UploadedFileComponent: React.FC<{
  file: UploadedFile;
  onDelete: () => void;
}> = ({ file, onDelete }) => {
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  // Simulate progress increment for demonstration purposes
  const simulateUpload = () => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setUploaded(true);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, 50);
  };

  React.useEffect(() => {
    simulateUpload();
  }, []);

  return (
    <Stack
      gap="xs"
      style={{
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        padding: "0.5rem",
      }}
    >
      <Stack gap="sm" justify="spaceBetween">
        <Group gap="xs">
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              width: "2rem",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconFileTypeXls />
          </div>
          <div>
            <Text size="xs" fontWeight="bold">
              {file.fileName}
            </Text>
            <Text size="xs">{file.fileSize}</Text>
          </div>
        </Group>
        <Group justify="right">
          <Button
            size={"xs"}
            variant={"ghost"}
            onClick={onDelete}
            aria-label="Delete file"
          >
            <IconX width={12} height={12} />
          </Button>
        </Group>
      </Stack>
      {uploaded ? (
        <Text size="xs" style={{ color: "green" }}>
          Uploaded
        </Text>
      ) : (
        <Progress
          value={progress}
          variant={"default"}
          radius={"lg"}
          bgColor={"bg-primary"}
          size={"xs"}
          striped={"default"}
          animated={"default"}
        />
      )}
    </Stack>
  );
};

const FileUploader: React.FC<{
  title?: string;
  supportedFormats?: string[];
}> = ({
  title = "Add new subscribers",
  supportedFormats = ["CVS", "XLS", "XLSX"],
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  // Function to handle file change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file) => ({
        fileName: file.name,
        fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  // Function to delete uploaded file
  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  // Function to handle import from URL
  const handleImportClick = () => {
    const urlInput = document.getElementById(
      "file-url-input"
    ) as HTMLInputElement;
    if (urlInput) {
      const url = urlInput.value.trim();
      if (url !== "") {
        setUploadedFiles([
          ...uploadedFiles,
          { fileName: url, fileSize: "N/A" },
        ]);
        urlInput.value = "";
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files).map((file) => ({
        fileName: file.name,
        fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };
  const preventDefault = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onDrop={handleDrop}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
    >
      <Card
        radius={"sm"}
        shadow={"md"}
        style={{
          width: "100%",
          padding: "1.5rem",
          maxWidth: "30rem",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text size="base" fontWeight="bold">
            {title}
          </Text>
          <IconX width={18} height={18} />
        </Card.Header>
        <Card.Content>
          <Stack gap="sm">
            <Stack
              style={{
                position: "relative",
                cursor: "pointer",
                border: "2px dashed #ccc",
                borderRadius: "0.25rem",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onDrop={handleDrop}
              onDragOver={preventDefault}
              onDragEnter={preventDefault}
            >
              <IconUpload />
              <Text size="sm">
                Drag & Drop{" "}
                <span style={{ color: "#3b82f6" }}>Choose file</span> to upload
              </Text>
              <Text size="xs">
                Supported formats: {supportedFormats.join(", ")}
              </Text>
              <input
                id="file-upload"
                type="file"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                }}
                onChange={handleFileChange}
                multiple
              />
            </Stack>
            {uploadedFiles.map((file, index) => (
              <UploadedFileComponent
                key={index}
                file={file}
                onDelete={() => handleDeleteFile(index)}
              />
            ))}
            <div style={{ position: "relative" }}>
              <TextInput
                variant={"default"}
                placeholder="Add file URL"
                radius={"sm"}
                label="Import from URL"
                id="file-url-input"
              />
              <Button
                style={{
                  position: "absolute",
                  right: "0.75rem",
                  top: "1.875rem",
                }}
                size={"xs"}
                variant={"outline"}
                onClick={handleImportClick}
              >
                Upload
              </Button>
            </div>
          </Stack>
        </Card.Content>
        <Card.Footer style={{ width: "100%" }}>
          <Group gap="xs" justify="spaceBetween" style={{ width: "100%" }}>
            <Group gap="xs">
              <IconExclamationCircle width={12} />
              <Text size="xs">Help Center</Text>
            </Group>
            <Group gap="xs" justify="right">
              <Button size={"sm"} variant={"outline"}>
                Cancel
              </Button>
              <Button size={"sm"} variant={"default"}>
                Import
              </Button>
            </Group>
          </Group>
        </Card.Footer>
      </Card>
    </div>
  );
};

export { FileUploader };
