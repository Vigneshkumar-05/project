import Navigation from "./components/NavHeader";
import Sidebar from "./components/Sidebar";
import { routes } from "./config/routes";
import { useTabContext } from "./context/ActiveTabContext";
import { Bounce, ToastContainer, toast } from "react-toastify";

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

  function notify(message: string): void {
    toast(message, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      pauseOnHover: true,
      theme: "colored",
      transition: Bounce,
      type: "error"
    });
  }

  return (
    <div className="max-w-screen h-screen grid grid-rows-[5.45%_1fr] grid-cols-[3%_1fr] bg-[#f9f9f9] ">
      <Navigation notify={notify} />
      <Sidebar notify={notify} />
      <ActiveTab />
      <ToastContainer />
    </div>
  );
};

export default App;
