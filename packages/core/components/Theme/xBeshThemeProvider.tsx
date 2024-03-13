// Name: XBeshThemeProvider.tsx
// Description: This file contains the theme provider component that wraps the entire application and provides font styling. It imports necessary modules and components, including the NextThemesProvider for theme switching functionality, and Google fonts for font styling. Font variables are defined for each font family with specified subsets and weights. The provider component wraps the application and applies font classes to the wrapper div, rendering children components with the specified font styles.
// Author: Madhav Dutta
// Last Updated: 20 Feb 2024
// Contact: https://github.com/madhavdutta

// Import necessary modules and components

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// // Import Google fonts
// import { Fira_Sans, Philosopher, Fira_Mono } from "next/font/google";

// // Import utility function for classnames
// import { cn } from "../../../utils";

// // Define font variables for each font family with specified subsets and weights
// export const fontSans = Fira_Sans({
//   subsets: ["latin"], // Specify font subsets for better performance
//   variable: "--font-sans", // Define a CSS variable name for the font
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify font weights to include
// });

// export const fontSerif = Philosopher({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   weight: ["400", "700"],
// });

// export const fontMono = Fira_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
//   weight: ["400", "500", "700"],
// });

// // Theme provider component that wraps the application and provides font styling
// export function XBeshThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return (
//     // Wrap the children with the NextThemesProvider to provide theme switching functionality
//     <NextThemesProvider {...props} > 
//       {/* Apply font classes to the wrapper div */}
//       <div className={cn(fontSans.variable, fontSerif.variable, fontMono.variable, fontSans.className)} >
//         {children} {/* Render children components */}
//       </div>
//     </NextThemesProvider>
//   );
// }

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function XBeshThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
