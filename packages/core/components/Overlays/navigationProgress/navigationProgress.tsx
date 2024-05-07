import { useEffect, useLayoutEffect, useState } from "react";
import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";

type ProgressbarProps = {
  target?: React.RefObject<HTMLElement>;
  className?: string;
};

export const NavigaionProgress = ({ target, className }: ProgressbarProps) => {
  useXbeshProviderCheck();
  const [progress, setProgress] = useState(0);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 10); // Update progress every 10ms

    return () => clearInterval(timer);
  }, [target]);


  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setProgress(0);
      }, 1000);
    }
  }, [progress]);

  return (
    <>
      {progress > 0 && (
        <div className="w-full fixed top-0 left-0 right-0">
          <div
            className={`h-2 ${className}`}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      )}
    </>
  );
};
