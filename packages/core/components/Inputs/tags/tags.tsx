import React, { useState } from "react";

import { IconX } from "@tabler/icons-react";

import { cn } from "../../../../utils";
import { Badge } from "../../DataDisplay/badge/badge";
import { TagsInputProps } from "./tags.d";
import { tagInputVariants } from "./tags.config";

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
          className={cn(tagInputVariants({ variant, radius, className }))}
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
