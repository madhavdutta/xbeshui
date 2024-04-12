import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "../../../../utils";
import { Badge } from "../../DataDisplay/badge/badge";

import { tagsVariants, TagsProps } from "./tags.config";

const TagsInput = React.forwardRef<HTMLInputElement, TagsProps>(
  (
    {
      className,
      label,
      description,
      labelPosition,
      radius,
      disabled,
      width,
      error,
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
      <div className="flex flex-col  w-full relative">
        {label && (
          <label
            className={cn(
              "flex items-center gap-2 mb-1 text-secondary-foreground text-sm font-normal",
              labelPosition === "left" && "flex-row-reverse"
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <div
            className={cn(
              "flex items-center gap-2 mb-1 text-muted-foreground text-sm  font-normal",
              labelPosition === "left" && "flex-row-reverse"
            )}
          >
            {description}
          </div>
        )}
        <div className="flex items-center flex-wrap gap-2 border border-input rounded-md p-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              rightSection={
                <IconX
                  size={14}
                  onClick={() => removeTag(tag)}
                  style={{ cursor: "pointer" }}
                />
              }
              variant={"secondary"}
              style={{ margin: "0 4px", cursor: "pointer" }}
            >
              {tag}
            </Badge>
          ))}
          <input
            {...props}
            ref={ref}
            disabled={disabled}
            className={cn(
              tagsVariants({ variant, error, width, radius, className }),
              "flex-grow outline-none"
            )}
            style={{ paddingRight: "30px" }} // Adjust padding to fit tags
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
);

TagsInput.displayName = "TagsInput";

export { TagsInput };
