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