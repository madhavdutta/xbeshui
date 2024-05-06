"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../packages/index.css";
import { XbeshProvider } from "../packages/core/components/Theme/xBeshTheme/xbeshProvider.tsx";
import { Toaster } from "../packages/core/components/Feedback/toast/toaster.tsx";
import App from "./App.tsx";

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
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RootComponent />
  </>
);
