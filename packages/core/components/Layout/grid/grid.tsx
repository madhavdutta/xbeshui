import type { StyleProp, GridProps, GridColProps } from './gridType';

// Function to generate responsive class names based on the provided prop and prefix
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const getResponsiveClass = (prop: StyleProp<any>, prefix: string) => {
  if (typeof prop === 'object') {
    // console.log('prefix', prefix);
    return Object.entries(prop).map(([key, value]) => `${prefix}${key === 'base' ? '' : `-${key}`}-${value}`).join(' ');
  }
  return `${prefix}-${prop}`;
};

// Grid component
const Grid: React.FC<GridProps> = ({
  align = 'stretch',
  children,
  columns = 12,
  grow = false,
  gutter = 'md',
  justify = 'start',
  overflow = 'visible',
  className = '',
}) => {
  // Generate class names based on the provided props
  const gutterClass = typeof gutter === 'number' ? `gap-${gutter}` : `gap-${gutter}`;
  const alignClass = `items-${align}`;
  const justifyClass = `justify-${justify}`;
  const overflowClass = `overflow-${overflow}`;
  const growClass = grow ? 'grid-rows-1' : '';

  // Render the Grid component with the generated class names
  return (
    <div
      className={`grid w-full grid-cols-${columns} ${gutterClass} ${alignClass} ${justifyClass} ${overflowClass} ${growClass} ${className}`}
    >
      {children}
    </div>
  );
};

// GridCol component
const GridCol: React.FC<GridColProps> = ({ children, offset, order, span = 12, className = '' }) => {
  // Generate class names based on the provided props
  const spanClass = getResponsiveClass(span, 'col-span');
  const offsetClass = offset ? getResponsiveClass(offset, 'col-start') : '';
  const orderClass = order ? getResponsiveClass(order, 'order') : '';

  // Render the GridCol component with the generated class names
  return <div className={`${spanClass} ${offsetClass} ${orderClass} ${className}`}>{children}</div>;
};

// Define the GridComponent interface
interface GridComponent extends React.FC<GridProps> {
  Col: typeof GridCol;
}

// Assign the GridCol component to the Col property of the Grid component
const GridWithCol: GridComponent = Grid as GridComponent;
GridWithCol.Col = GridCol;

// Export the Grid component with the Col property
export { GridWithCol as Grid };