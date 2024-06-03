import { useEffect, useCallback } from 'react';

type EventListener<K extends keyof WindowEventMap> = (
  this: Window,
  ev: WindowEventMap[K]
) => void;

const useWindowListener = <K extends keyof WindowEventMap>(
  eventType: K,
  listener: EventListener<K>,
  options?: boolean | AddEventListenerOptions
): void => {
  const handleEvent = useCallback(
    (event: WindowEventMap[K]): void => {
      listener.call(window, event);
    },
    [listener]
  );

  useEffect(() => {
    window.addEventListener(eventType, handleEvent, options);
    return () => {
      window.removeEventListener(eventType, handleEvent, options);
    };
  }, [eventType, handleEvent, options]);
};

export {useWindowListener};