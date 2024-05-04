export type StyleProp<T> = T | Partial<Record<'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', T>>;

export type ColSpan = number | 'auto' | 'content';

export type XBeshSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface GridProps {
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  children: React.ReactNode;
  columns?: number;
  grow?: boolean;
  gutter?: StyleProp<XBeshSpacing | number>;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  className?: string;
}

export interface GridColProps {
  children: React.ReactNode;
  offset?: StyleProp<number>;
  order?: StyleProp<number>;
  span?: StyleProp<ColSpan>;
  className?: string;
}