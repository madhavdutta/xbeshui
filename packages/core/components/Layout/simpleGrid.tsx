import React from "react";

interface SimpleGridProps {
  cols: number;
  spacing?: "xs" | "sm" | "md" | "lg" | "xl";
  verticalSpacing?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
}

const SimpleGrid: React.FC<SimpleGridProps> = ({
  cols,
  spacing = "md",
  verticalSpacing = "md",
  children,
  className,
}) => {
  const spacingMap: { [key: string]: string } = {
    xs: "gap-x-2",
    sm: "gap-x-4",
    md: "gap-x-6",
    lg: "gap-x-8",
    xl: "gap-x-10",
  };

  const verticalSpacingMap: { [key: string]: string } = {
    xs: "gap-y-2",
    sm: "gap-y-4",
    md: "gap-y-6",
    lg: "gap-y-8",
    xl: "gap-y-10",
  };

  const combinedSpacingClasses = `${spacingMap[spacing]} ${verticalSpacingMap[verticalSpacing]}`;

  const gridStyles = {
    gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
  };

  return (
    <div
      style={gridStyles}
      className={`grid ${combinedSpacingClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default SimpleGrid;
