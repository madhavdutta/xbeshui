interface TimelineProps {
  children: React.ReactNode;
  lineWidth?: number;
  color?: string;
}

interface TimelineItemProps {
  children: React.ReactNode;
  color?: string;
  bulletPosition?: number;
  bulletSize?: number;
}
export { TimelineProps, TimelineItemProps };
