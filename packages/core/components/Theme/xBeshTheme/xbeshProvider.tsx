// Name: XbeshProvider.tsx
// Description: This file contains the context provider component that wraps the entire application and provides access to the UI context. It also contains the custom hook to conveniently access the context anywhere in the application.
// Author: Madhav D. Parashar
// Last Updated: Feb 20, 2024
// Contact: github.com/madhavdutta
// Notes: This file needs to be used in the root Layout component of the application. It provides the context value to the tree, making it accessible to all components wrapped within XbeshProvider. It also wraps children with the theme provider.

import { createContext, useState, type ReactNode, useContext } from 'react';
import {Tooltip,SonnerStack,XBeshThemeProvider } from '../../index';

interface XBeshUIContextType {
  error: Error | null;
  handleError: (error: Error) => void;
  clearError: () => void;
}

export const XbeshUIContext = createContext<XBeshUIContextType | undefined>(undefined);

export const useXbeshUI = () => {
  const context = useContext(XbeshUIContext);
  if (context === undefined) {
    throw new Error('useXbeshUI must be used within a XbeshProvider');
  }
  return context;
};

export const useXbeshProviderCheck = () => {
  const context = useContext(XbeshUIContext);
  if (context === undefined) {
    throw new Error('XbeshProvider is not present in the component tree.');
  }
};

export const XbeshProvider: React.FC<{
  children: ReactNode;
  storageKey: string;
  defaultTheme: 'system' | 'dark' | 'light';
}> = ({ children, storageKey, defaultTheme }) => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = (error: Error) => {
    setError(error);
    console.error(error);
  };

  const clearError = () => setError(null);

  const contextValue: XBeshUIContextType = {
    error,
    handleError,
    clearError,
  };

  return (
    <XbeshUIContext.Provider value={contextValue}>
      <XBeshThemeProvider defaultTheme={defaultTheme} storageKey={storageKey}>
      <SonnerStack />
      {/* <ToastProvider> */}
      <Tooltip.Provider>
        {error ? <ErrorDisplay error={error} clearError={clearError} /> : null}
        <div className="bg-background text-foreground">
        {children}
        </div>
        </Tooltip.Provider>
        {/* </ToastProvider> */}
      </XBeshThemeProvider>
    </XbeshUIContext.Provider>
  );
};

interface ErrorDisplayProps {
  error: Error;
  clearError: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, clearError }) => {
  return (
    <div className="error-display">
      <p>An error occurred: {error.message}</p>
      <button type={"button"}onClick={clearError}>Dismiss</button>
    </div>
  );
};
