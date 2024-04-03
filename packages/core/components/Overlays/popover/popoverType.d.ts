export interface DynamicPopoverProps {
    trigger?: React.ReactNode;
    content?: React.ReactNode;
    childern?:React.ReactNode;
    align?: "start" | "center" | "end";
    sideOffset?: number;
    className?:string
  }