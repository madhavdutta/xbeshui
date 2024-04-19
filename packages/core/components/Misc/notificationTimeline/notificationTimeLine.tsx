import React, { useState, useMemo } from "react";
import { Button } from "../../Buttons/button/button";
import { cn } from "../../../../utils";
import {
  NotificationTimelineProps,
  notificationTimelineVariants,
} from "./notiicationTimeLine.config";

const NotificationTimeline: React.FC<NotificationTimelineProps> = ({
  data = [],
  variant,
  lineWidth,
  bulletSize,
  activeItem = 0,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const displayedItems = useMemo(
    () => data.slice(0, startIndex + 10),
    [data, startIndex]
  );

  const showAll = displayedItems.length === data.length;

  const addMoreItems = () => {
    const nextItems = data.slice(startIndex + 10, startIndex + 20);
    if (nextItems.length > 0) {
      setStartIndex((prevIndex) => prevIndex + 10);
    }
  };

  const showLessItems = () => {
    setStartIndex(0);
  };

  return (
    <div className="">
      <ol
        className={cn(
          "relative max-w-5xl mx-auto border-l-4 border-slate-300 dark:border-slate-400 ",
          notificationTimelineVariants({ lineWidth, variant })
        )}
      >
        {displayedItems.map((item, index) => (
          <li key={index} className={cn("mb-10 ms-4")}>
            <div
              className={cn(
                `absolute w-${bulletSize} h-${bulletSize} bg-gray-400 rounded-full mt-1.5 -start-${
                  bulletSize && parseInt(bulletSize) / 2
                } border border-white dark:border-gray-900 dark:bg-slate-100`,
                index < activeItem && "bg-black"
              )}
            ></div>
            <p className="text-sm font-medium pb-2">{item.label}</p>
            {item.title && (
              <p className="text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </p>
            )}
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-slate-400">
              {item.date}
            </time>
            {item.desc && (
              <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            )}
          </li>
        ))}
      </ol>
      <div className="relative max-w-5xl mx-auto">
        {!showAll && (
          <Button className="" onClick={addMoreItems} variant="outline">
            More...
          </Button>
        )}
        {showAll && (
          <Button className="" onClick={showLessItems} variant="outline">
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};
NotificationTimeline.displayName = "NotificationTimeline";
export { NotificationTimeline };
