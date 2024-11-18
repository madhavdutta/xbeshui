/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { TextInput } from "../..";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (selectedOptions: Option[]) => void;
  maxSelected?: number;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  className?: string;
  initialValue?: Option[]; // New prop for initial values
  value?: Option[]; // New prop for controlled component
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  placeholder = "Select options...",
  onChange,
  maxSelected,
  disabled = false,
  searchable = true,
  clearable = true,
  className = "",
  initialValue = [], // Default to empty array
  value, // For controlled component
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(initialValue);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [availableOptions, setAvailableOptions] = useState<Option[]>(options);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update selected options if value prop changes (for controlled component)
    if (value !== undefined) {
      setSelectedOptions(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

document.addEventListener("mousedown", handleClickOutside);
return () => {
  document.removeEventListener("mousedown", handleClickOutside);
};
  }, []);

  useEffect(() => {
    setAvailableOptions(
      options.filter(
        (option) =>
          !selectedOptions.some((selected) => selected.value === option.value)
      )
    );
  }, [options, selectedOptions]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelectOption = (option: Option) => {
    if (maxSelected && selectedOptions.length >= maxSelected) {
      return;
    }
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const handleRemoveOption = (option: Option) => {
    const newSelectedOptions = selectedOptions.filter(
      (item) => item.value !== option.value
    );
    setSelectedOptions(newSelectedOptions);
    onChange?.(newSelectedOptions);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleClearAll = () => {
    setSelectedOptions([]);
    onChange?.([]);
  };

  const filteredOptions = availableOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm)
  );

  // const selectedValues = selectedOptions.map((option) => option.label).join(", ");

  return (
    <>
    <div className={`w-full relative ${className}`} ref={dropdownRef}>
      <div
        className={`border border-gray-300 rounded-sm p-2 flex justify-between items-center ${ 
          disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-pointer" 
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-2 overflow-hidden">
          {selectedOptions.length === 0 ? (
            <span className="text-muted-foreground text-sm px-2">{placeholder}</span>
          ) : (
            selectedOptions.map((option, idx) => (
              <span
                key={idx}
                className="flex items-center bg-muted px-2 rounded-full text-xs"
              >
                {option.label}
                <button
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveOption(option);
                  }}
                  disabled={disabled}
                >
                  <IconX width={12} className="text-primary" />
                </button>
              </span>
            ))
          )}
        </div>
        {/* <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {selectedOptions.length === 0 ? (
            <span className="text-muted-foreground text-sm">{placeholder}</span>
          ) : (
            <span className="text-sm">{selectedValues}</span>
          )}
        </div> */}
        <span>
          {isOpen ? (
            <IconChevronUp width={16} />
          ) : (
            <IconChevronDown width={16} />
          )}
        </span>
      </div>
      {isOpen && !disabled && (
        <div className="absolute z-10 w-full bg-background p-2 border border-gray-300 rounded mt-2 shadow-lg">
          {searchable && (
            <TextInput
              variant="default"
              type="text"
              placeholder="Search..."
              className="w-full border-b p-2 outline-none"
              value={searchTerm}
              onChange={handleSearch}
              radius="sm"
            />
          )}
          <ul className="p-2 overflow-y-auto max-h-60">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, idx) => (
                <li
                  key={idx}
                  className={`p-2 hover:bg-muted cursor-pointer ${
                    selectedOptions.some(
                      (selected) => selected.value === option.value
                    )
                      ? "bg-muted"
                      : ""
                  }`}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No options found</li>
            )}
          </ul>
          {/* {selectedOptions.length > 0 && (
            <div className="p-2 border-t">
              <p className="text-sm font-semibold mb-2">Selected:</p>
              <div className="flex flex-wrap gap-2">
                {selectedOptions.map((option, idx) => (
                  <span
                    key={idx}
                    className="flex items-center bg-muted px-2 py-1 rounded-full text-xs"
                  >
                    {option.label}
                    <button
                      className="ml-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveOption(option);
                      }}
                      disabled={disabled}
                    >
                      <IconX width={12} className="text-primary" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )} */}
          {clearable && selectedOptions.length > 0 && (
            <button
              className="w-full text-center text-sm text-primary hover:underline py-2"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export { MultiSelect};