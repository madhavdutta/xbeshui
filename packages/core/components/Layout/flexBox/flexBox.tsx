import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  className?: string;
}

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  className,
}) => {
  const getGap = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      return "0.5rem";
    } else if (screenWidth < 768) {
      return "1rem";
    } else if (screenWidth < 1024) {
      return "1.5rem";
    } else {
      return "2rem";
    }
  };

  const flexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: getGap(),
  };

  return (
    <div className={className} style={flexStyle}>
      {children}
    </div>
  );
};

export default FlexBox;
