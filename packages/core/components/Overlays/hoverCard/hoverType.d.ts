export interface HoverCardProps {
  triggerContent: React.ReactNode;
  cardContent: React.ReactNode;
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
}
