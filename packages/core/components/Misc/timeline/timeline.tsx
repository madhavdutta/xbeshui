import React from "react";
import { TimelineItemProps, TimelineProps } from "./timeline.d";

const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  bulletPosition = 16,
  color = "red",
}) =>
  children ? (
    <li className={`relative -left-${bulletPosition}  mb-8 ms-6`}>
      <div
        className={`items-center justify-between p-4 bg-white border border-${color}-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600`}
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
    className={`relative  border-l-${lineWidth} border-${color}-500 dark:border-${color}-700`}
  >
    {children}
  </ol>
);

export { Timeline, TimelineItem };
