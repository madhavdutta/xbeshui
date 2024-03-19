// Name: XbeshProvider.tsx
// Description: This file contains the context provider component that wraps the entire application and provides access to the UI context. It also contains the custom hook to conveniently access the context anywhere in the application.
// Author: Madhav D. Parashar
// Last Updated: Feb 20, 2024
// Contact: github.com/madhavdutta
// Notes: This file needs to be used in the root Layout component of the application. It provides the context value to the tree, making it accessible to all components wrapped within XbeshProvider. It also wraps children with the theme provider.

import React, { createContext, useState, ReactNode, useContext } from 'react';
import { XBeshThemeProvider } from './xBeshThemeProvider';

// Define the interface for the context, specifying the error state and the error handling function
interface XBeshUIContextType {
  error: Error | null; // Holds error information, if any
  handleError: (error: Error) => void; // Function to handle errors
}

// Create a context to share the state and functions related to the UI throughout the application
export const XbeshUIContext = createContext<XBeshUIContextType | undefined>(undefined);

// Custom hook to conveniently access the context anywhere in the application
export const useXbeshUI = () => {
  const context = useContext(XbeshUIContext);
  if (context === undefined) {
    throw new Error('useXbeshUI must be used within a XbeshProvider'); // Throw an error if the hook is used outside of XbeshProvider
  }
  return context;
};

// Provider component that wraps the entire application and provides access to the UI context
export const XbeshProvider: React.FC<{ children: ReactNode, storageKey: string, defaultTheme: "system" | "dark" | "light" }> = ({ children, storageKey, defaultTheme }) => {
  const [error, setError] = useState<Error | null>(null); // State to hold error information

  // Function to handle errors
  const handleError = (error: Error) => {
    setError(error);
    console.error(error); // Log the error to the console
  };

  // Define the context value including error state and error handling function
  const contextValue: XBeshUIContextType = {
    error,
    handleError,
  };

  // Provide the context value to the tree, making it accessible to all components wrapped within XbeshProvider
  return (
    <XbeshUIContext.Provider value={contextValue}>
      {/* Wrap children with the theme provider */}
      <XBeshThemeProvider defaultTheme={defaultTheme} storageKey={storageKey} >
        
        {children} {/* Render children components */}
      </XBeshThemeProvider>
    </XbeshUIContext.Provider>
  );
};
