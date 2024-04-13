import React from "react";
import { TimelineItemProps, TimelineProps } from "./timelineType";

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  // bulletPosition = 20,
  // color = "zinc",
}) =>
  children ? (
    <li className={`relative -left-16 mb-8 ms-6 bg-background`}>
      <div
        className={`items-center justify-between p-4 text-secondary-foreground border border-input rounded-lg shadow-sm sm:flex`}
      >
        {children}
      </div>
    </li>
  ) : (
    <></>
  );

const Timeline: React.FC<TimelineProps> = ({
  children,
  lineWidth = 2,
  color = "gray",
}) => (
  <ol
    className={`relative border-input left-16 border-l-${lineWidth} border-${color}-500 dark:border-${color}-700`}
  >
    {children}
  </ol>
);

export { Timeline, TimelineItem };
