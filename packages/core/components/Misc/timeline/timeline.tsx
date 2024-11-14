import type { TimelineItemProps, TimelineProps } from "./timelineType";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  // bulletPosition = 20,
  // color = "zinc",
}) => {
  useXbeshProviderCheck();
  return (
    children ? (
      // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
      <li className={`relative mb-6 bg-background`} style={{marginLeft:'-40px'}}>
        <div
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          className={`items-center p-4 text-secondary-foreground border border-input rounded-lg shadow-sm flex gap-2`}
        >
          {children}
        </div>
      </li>
    ) : (
      <></>
    )
  )
};

const Timeline: React.FC<TimelineProps> = ({
  children,
  lineWidth = 2,
  color = "gray",
}) => {
  useXbeshProviderCheck();
  return (
    <ol
      style={{marginLeft:'40px'}}
      className={`relative border-input border-l-${lineWidth} border-${color}-500 dark:border-${color}-700`}
    >
      {children}
    </ol>
  )
}

export { Timeline, TimelineItem };
