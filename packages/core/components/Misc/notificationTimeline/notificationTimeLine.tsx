import React, { useState, useEffect } from "react";
import { Button } from "../../Buttons/button/button";

export interface TimelineItem {
  label: string;
  date: string;
  title?: string;
  desc?: string;
}

interface NotificationTimelineProps {
  data: TimelineItem[];
  lineWidth?: number;
  bullet?: string;
}


export const NotificationTimeline = ({
  data,
}: NotificationTimelineProps) => {
  const [displayedItems, setDisplayedItems] = useState(data.slice(0, 10)); // Initially display 10 items
  const [startIndex, setStartIndex] = useState(10); // Index to start loading new items from
  const [disableButton, setDisableButton] = useState(true);
  const addMoreItems = () => {
    const nextItems = data.slice(startIndex, startIndex + 10);
    if (nextItems.length > 0) {
      setDisplayedItems((prevItems) => [...prevItems, ...nextItems]);
      setStartIndex((prevIndex) => prevIndex + 10);
    }
  };

  useEffect(() => {
    if (displayedItems.length === data.length) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [displayedItems]);

  return (
    <div className="">
      <ol
        className={`relative max-w-5xl mx-auto border-l-4 border-slate-300 dark:border-slate-400`}
      >
        {displayedItems &&
          displayedItems.map((item: TimelineItem, index: number) => {
            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-slate-100"></div>
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
            );
          })}
      </ol>
      <div className="relative max-w-5xl mx-auto">
        <Button
          disabled={disableButton}
          className=""
          onClick={addMoreItems}
          variant="outline"
        >
          More...
        </Button>
      </div>
    </div>
  );
};
