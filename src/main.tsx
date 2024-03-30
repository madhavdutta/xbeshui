'use client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../packages/index.css";
import { XbeshProvider } from "../packages/core/components/Theme/xBeshTheme/xbeshProvider.tsx";
import { Progressbar } from "../packages/core/components/Overlays/navigationProgress/navigationProgress.tsx";
import { Toaster } from "../packages/core/components/Feedback/toast/toaster.tsx";
const RootComponent = () => {
  const mainRef = React.useRef<HTMLElement | null>(null);

  return (
    <React.StrictMode>
      <XbeshProvider storageKey={"vite"} defaultTheme={"light"}>
        <div>
          <App />
          <Progressbar
            target={mainRef}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          />
          <Toaster />
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
