// Name: XBeshThemeProvider.tsx
// Description: This file contains the theme provider component that wraps the entire application and provides font styling. It imports necessary modules and components, including the NextThemesProvider for theme switching functionality, and Google fonts for font styling. Font variables are defined for each font family with specified subsets and weights. The provider component wraps the application and applies font classes to the wrapper div, rendering children components with the specified font styles.
// Author: Madhav Dutta
// Last Updated: 20 Feb 2024
// Contact: https://github.com/madhavdutta

// Import necessary modules and components

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function XBeshThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = isClientSide()
      ? (localStorage.getItem(storageKey) as Theme)
      : null;
    return storedTheme || defaultTheme;
  });

  useEffect(() => {
    if (!isClientSide()) return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (isClientSide()) {
        localStorage.setItem(storageKey, theme);
      }
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

const isClientSide = () => {
  return typeof window !== "undefined";
};