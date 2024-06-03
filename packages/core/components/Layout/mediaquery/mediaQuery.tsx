import { useEffect, useState } from 'react';

interface MediaQueryProps {
  query: string;
  children: React.ReactNode;
}

const isBrowser = typeof window !== 'undefined';

export const MediaQuery: React.FC<MediaQueryProps> = ({ query, children }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  if (!isBrowser) {
    return null;
  }

  return matches ? <>{children}</> : null;
};