import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  const namesArray = name.split(' ');
  if (namesArray.length === 1) return namesArray[0]?.[0] ?? '';
  return `${namesArray[0]?.[0] ?? ''}${namesArray[namesArray.length - 1]?.[0] ?? ''}`.toUpperCase();
};

export const getViewport = () => {
  let viewportWidth, viewportHeight;

  if (typeof window !== 'undefined') {
    // Browser environment
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
  } else {
    // Server-side (Node.js) or other environments
    // You can handle this scenario based on your requirements
    // For example, return default values or throw an error
    viewportWidth = 1920;
    viewportHeight = 1080;
  }

  return { width: viewportWidth, height: viewportHeight };
};