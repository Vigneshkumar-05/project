import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { DeviceContextProvider } from "./context/DeviceContext.tsx";
import { ActiveTabProvider } from "./context/ActiveTabContext.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DeviceContextProvider>
      <ActiveTabProvider>
        <App />
      </ActiveTabProvider>
    </DeviceContextProvider>
  </StrictMode>
);
