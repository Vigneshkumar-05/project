import { useState } from "react";
import { DeviceContextProvider } from "./context/DeviceContext";
import { routes } from "./config/routes";
import Navigation from "./components/NavHeader";
import Sidebar from "./components/Sidebar";

declare global {
  interface Window {
    navigationApi: {
      openScriptWindow: () => void;
    };
  }
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveTabComponent = routes[activeTab].component;

  return (
    <DeviceContextProvider>
      <div className="max-w-screen h-screen grid grid-rows-[5.45%_1fr] grid-cols-[3%_1fr] bg-[#f9f9f9]">
        <Navigation />
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ActiveTabComponent />
      </div>
    </DeviceContextProvider>
  );
};

export default App;
