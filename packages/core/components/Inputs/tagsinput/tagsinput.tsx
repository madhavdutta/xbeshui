import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "../../../../utils";
import { Badge } from "../../DataDisplay/badge/badge";
import { tagsinputVariants, type TagsinputProps } from "./tagsinput.config";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const TagsInput = React.forwardRef<HTMLInputElement, TagsinputProps>(
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
      maxTags = 1000000000,
      placeholder = "Enter tag",
      onAdd,
      onRemove,
      onClear,
      clearable = false,
      splitChars = [","],
      ...props
    },
    ref
  ) => {
    useXbeshProviderCheck();

    const [tags, setTags] = useState<string[]>(data || []);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const addTag = (tag: string) => {
      if (tag && (!tags?.includes(tag) || allowDuplicates) && tags.length < maxTags) {
        const newTags = [...tags, tag];
        setTags(newTags);
        setInputValue("");
        onAdd?.(tag);
      }
    };

    const removeTag = (tagToRemove: string) => {
      const newTags = tags.filter((tag) => tag !== tagToRemove);
      setTags(newTags);
      onRemove?.(tagToRemove);
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" && !event.nativeEvent.isComposing) {
        event.preventDefault();
        addTag(inputValue.trim());
      }

      if (splitChars.includes(event.key) && inputValue.trim().length > 0) {
        event.preventDefault();
        const newTags = inputValue
          .split(new RegExp(`[${splitChars.join("")}]`))
          .map((tag) => tag.trim())
          .filter((tag) => tag !== "");
        for (const tag of newTags) {
          addTag(tag);
        }
      }

      if (event.key === "Backspace" && inputValue.length === 0 && tags.length > 0) {
        removeTag(tags[tags.length - 1]);
      }
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
      event.preventDefault();
      const pastedText = event.clipboardData.getData("text/plain");
      const newTags = pastedText
        .split(new RegExp(`[${splitChars.join("")}]`))
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      for (const tag of newTags) {
        addTag(tag);
      }
    };

    const handleClear = () => {
      setTags([]);
      setInputValue("");
      onClear?.();
    };

    return (
      <div className="flex flex-col">
        {label && (
          <label
            className={cn(
              "flex items-center gap-2 mb-1 text-secondary-foreground text-sm font-normal",
              labelPosition === "right" && "flex-row-reverse"
            )}
          >
            {label}
          </label>
        )}
        {description && (
          <div
            className={cn(
              "flex items-center gap-2 mb-1 text-muted-foreground  text-sm font-normal",
              labelPosition === "right" && "flex-row-reverse"
            )}
          >
            {description}
          </div>
        )}
        <div
          className={cn(
            tagsinputVariants({ variant, error, width, radius, className }),
            "flex items-center flex-wrap gap-1 border border-input p-[6px] relative rounded-sm",
            tags.length<=0 ? "" : "p-1"
          )}
        >
          {/* <div className={tags.length<=0 ? "" : "p-1"}> */}
          {tags.map((tag) => (
            <Badge
              key={tag}
              rightSection={
                <IconX
                  size={12}
                  onClick={() => removeTag(tag)}
                  style={{ cursor: "pointer" }}
                />
              }
              variant={"secondary"}
              style={{ margin: "0 4px", cursor: "pointer" } }
              size="sm"
              className="p-[6px] h-6 mb-2 rounded-sm text-sm"
            >
              {tag}
            </Badge>
          ))}
              {/* </div> */}
          <input
            {...props}
            ref={ref}
            disabled={disabled}
            className={cn(
              tagsinputVariants({ variant, error, width, radius, className }), " shadow-none p-0 pb-[2px] pl-2 w-full outline-none border-0  hover:border-0 hover:ring-0 focus:border-0 focus:ring-0 focus-visible:border-0 focus-visible:ring-0",
            )}
            style={{ paddingRight: "30px" }} // Adjust padding to fit tags
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            placeholder={placeholder}
          />
          {clearable && tags.length > 0 && (
            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted-foreground hover:text-secondary-foreground"
              onClick={handleClear}
            >
              <IconX size={16} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

TagsInput.displayName = "TagsInput";

export { TagsInput };