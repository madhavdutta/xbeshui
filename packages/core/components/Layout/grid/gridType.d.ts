export type SpanType =
  | number
  | {
      base: number;
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
      xl?: number;
    };

export interface GutterType {
  base: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  [key: string]: number | undefined;
}

export interface GridProps {
  children: React.ReactNode;
  gutter?: number | GutterType;
  columns?: number;
  overflow?: "visible" | "hidden";
  className?: string;
  wrap?:'wrap'|'nowrap'
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "stretch" | "center" | "flex-start" | "flex-end";
}

export interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span: SpanType;
  offset?: SpanType;
  order?: SpanType;
  style?: React.CSSProperties;
  className?: string;
}
