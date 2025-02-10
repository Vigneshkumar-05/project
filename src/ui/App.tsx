import Navigation from "./components/NavHeader";
import Sidebar from "./components/Sidebar";
import { routes } from "./config/routes";

import { useTabContext } from "./context/ActiveTabContext";

declare global {
  interface Window {
    navigationApi: {
      openScriptWindow: () => void;
    };
  }
}

function App(): JSX.Element {
  const { activeTab } = useTabContext();
  const ActiveTab = routes[activeTab].component;

  return (
    <div className="max-w-screen h-screen grid grid-rows-[5.45%_1fr] grid-cols-[3%_1fr] bg-[#f9f9f9] ">
      <Navigation />
      <Sidebar />
      <ActiveTab />
    </div>
  );
};

export default App;
