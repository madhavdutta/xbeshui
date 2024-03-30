import React from "react";
import { GutterType, GridProps, GridColProps } from "./grid.d";

const getValueForViewport = (
  value: number | GutterType,
  theme: { breakpoints: { [key: string]: number } }
) => {
  if (typeof value === "number") return value;
  const breakpoints = ["xs", "sm", "md", "lg", "xl"];
  let result = value.base || 0;
  breakpoints.forEach((breakpoint) => {
    if (
      window.innerWidth >= theme.breakpoints[breakpoint] &&
      value[breakpoint] !== undefined
    ) {
      result = value[breakpoint]!;
    }
  });
  return result;
};

const theme = {
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  gutterBase: 16,
};

const Grid: React.FC<GridProps> = ({
  children,
  gutter = 10,
  columns = 12,
  overflow = "visible",
  justify,
  align,
  className,
}) => {
  const gutterValue =
    typeof gutter === "number" ? gutter : getValueForViewport(gutter, theme);
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `${gutterValue}px`,
    overflow,
    justifyContent: justify,
    alignItems: align,
  };

  return (
    <div style={gridStyle} className={className}>
      {children}
    </div>
  );
};

const GridCol: React.FC<GridColProps> = ({
  children,
  span,
  offset = 0,
  order = 0,
  style,
  className,
}) => {
  const spanValue = getValueForViewport(span, theme);
  const offsetValue = getValueForViewport(offset, theme);
  const orderValue = getValueForViewport(order, theme);

  const colStyle: React.CSSProperties = {
    gridColumn: `span ${spanValue}`,
    marginLeft: `${offsetValue * theme.gutterBase}px`, // Example calculation, adjust as needed
    order: orderValue,
    ...style,
  };

  return (
    <div style={colStyle} className={className}>
      {children}
    </div>
  );
};

export { Grid, GridCol };
