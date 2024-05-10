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
      <li className={`relative -left-16 mb-8 bg-background`}>
        <div
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          className={`items-center justify-between p-4 text-secondary-foreground border border-input rounded-lg shadow-sm sm:flex`}
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
      className={`relative border-input left-16 border-l-${lineWidth} border-${color}-500 dark:border-${color}-700`}
    >
      {children}
    </ol>
  )
}

export { Timeline, TimelineItem };
