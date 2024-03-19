import React, { useState } from "react";
import { Badge } from "../badge/badge";
import { IconX } from "@tabler/icons-react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../../utils";

const tagInputVariants = cva(
  "w-full h-9 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      labelPosition: {
        default: "",
        right: "",
        left: "",
      },

      variant: {
        default: "none",
        filled: "bg-gray-200",
        unstyled: "border-0 shadow-none",
      },

      radius: {
        default: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      // size: {
      //   default: "",
      //   xs: "shadow-xs",
      //   sm: "shadow-sm",
      //   md: "shadow-md",
      //   lg: "shadow-lg",
      //   xl: "shadow-xl",
      // },
      disabled: {
        default: "",
        true: "border",
        false: "",
      },
      error: {
        default: "",
        true: "border-red-500 text-red-500",
      },
    },
    defaultVariants: {
      labelPosition: "default",
      radius: "default",
      // size: "default",
      disabled: "default",
      variant: "default",
    },
  }
);

export interface TagsInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof tagInputVariants> {
  className?: string;
  placeholder?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  labelPosition?: "default" | "left" | "right";
  variant?: "default" | "filled" | "unstyled";
  radius?: "default" | "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  error?: boolean;
  data?: string[];
  allowDuplicates?: boolean;
  maxTags?: number;
}

const TagsInput = React.forwardRef<HTMLInputElement, TagsInputProps>(
  (
    {
      className,
      label,
      description,
      labelPosition,
      radius,
      disabled,
      variant,
      error,
      data,
      allowDuplicates = false,
      maxTags = Infinity,
      placeholder = "Enter tag",
      ...props
    },
    ref
  ) => {
    const [tags, setTags] = useState<string[]>(data || []);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const addTag = (tag: string) => {
      if (
        tag &&
        (!tags?.includes(tag) || allowDuplicates) &&
        tags.length < maxTags
      ) {
        setTags((prevTags) => [...prevTags, tag]);
        setInputValue("");
      }
    };

    const removeTag = (tagToRemove: string) => {
      setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addTag(inputValue.trim());
      }
    };

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label
            className={cn(
              "flex items-center gap-2 mb-1 text-sm font-normal",
              labelPosition === "left" && "flex-row-reverse"
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <div className="mb-1 text-xs text-gray-400 font-normal">
            {description}
          </div>
        )}
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          className={cn(
            tagInputVariants({ error, variant, radius, className })
          )}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <div>
          {tags?.map((tag, index) => (
            <Badge
              key={index}
              rightSection={<IconX size={14} onClick={() => removeTag(tag)} />}
              variant={"secondary"}
              style={{ margin: "0 4px", cursor: "pointer" }}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    );
  }
);

TagsInput.displayName = "TagsInput";

export { TagsInput };
