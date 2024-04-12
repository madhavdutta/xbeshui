import React from "react";
import { TimelineItemProps, TimelineProps } from "./timelineType";

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  bulletPosition = 16,
  color = "zinc",
}) =>
  children ? (
    <li className={`relative -left-${bulletPosition}  mb-8 ms-6`}>
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
    className={`relative border-input  border-l-${lineWidth} border-${color}-500 dark:border-${color}-700`}
  >
    {children}
  </ol>
);

export { Timeline, TimelineItem };
