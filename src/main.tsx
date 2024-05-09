"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../packages/index.css";
import { XbeshProvider } from "../packages/core/components/Theme/xBeshTheme/xbeshProvider.tsx";
import App from "./App-karthik.tsx";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <XbeshProvider storageKey={"vite"} defaultTheme={"light"}>
        <div className="w-full">
          {/* <AppAakibUi /> */}
          <App />
        </div>
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