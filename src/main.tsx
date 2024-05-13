"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../packages/index.css";
import { XbeshProvider } from "../packages/core/components/Theme/xBeshTheme/xbeshProvider.tsx";
import App from "./App.tsx";
import { SonnerStack, Toaster } from "../packages/core/components/index.tsx";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <XbeshProvider storageKey={"vite"} defaultTheme={"light"}>
        <div className="w-full">
          {/* <AppAakibUi /> */}
          <App />
        </div>
        <Toaster />
        <SonnerStack />
      </XbeshProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<RootComponent />);
