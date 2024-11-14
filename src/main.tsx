"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../packages/index.css";
import { XbeshProvider } from "../packages/core/components/Theme/xBeshTheme/xbeshProvider";
import App from "./App";
// import App from "./App-Akanksha";
import { SonnerStack } from "../packages/core/components/index";
import AppMaheshUi from "./App-mahesh";
// import AppDataDisplay from "./AppDataDisplay";
// import AppLayout from "./AppLayout";
// import AppMisc from "./AppMisc";
// import AppNavigation from "./AppNavigation";
// import AppOverlays from "./AppOverlays";
// import AppTypography from "./AppTypography";
// import AppTest from "./App-Test";
// import AppDashbord from "./App-Dashboard";

const RootComponent = () => {
  return (
    <React.StrictMode>
      <XbeshProvider storageKey={"vite"} defaultTheme={"light"}>
        <div className="w-full">
          {/* <AppMaheshUi /> */}
          <App />
          {/* <AppTest /> */}
          {/* <AppDashbord /> */}
          {/* <AppDataDisplay /> */}
          {/* <AppLayout /> */}
          {/* <AppMisc /> */}
          {/* <AppNavigation /> */}
          {/* <AppOverlays /> */}
          {/* <AppTypography /> */}
        </div>
        {/* <Toaster /> */}
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
