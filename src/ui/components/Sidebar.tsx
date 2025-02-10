import { useState } from "react";

import { routes, sidebarFunctions } from "../config/routes";
import { useTabContext } from "../context/ActiveTabContext";


function Sidebar(): JSX.Element {
  const { activeTab, setActiveTab } = useTabContext();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className={`w-full h-full flex flex-col justify-between items-center bg-white shadow-custom1 transition-[width] duration-500 ease-in-out ${showSidebar && "relative w-[450%]"}`} >
      <section className="h-[50%] w-[85%] flex flex-col justify-around" >
        {routes.map((value, index) => (
          <button key={index} className="hover:bg-shadowGray rounded-md">
            <div
              className={`p-2 w-full h-full flex items-center text-2xl space-x-3 rounded-md ${value.name === "Disconnected"
                ? "text-primaryRed"
                : activeTab === index ? "text-lgBlue" : "text-txGray"
                } ${activeTab === index && showSidebar && "bg-blue-50"}`}
              onClick={() => setActiveTab(index)}
            >
              <value.icon className={`${showSidebar && "w-[25%] h-full"}`} />
              {showSidebar && <span className="w-full h-full flex items-center text-xs">{value.name}</span>}
            </div>
          </button>
        ))}
      </section>

      <section className="h-[16%] w-[85%] flex flex-col justify-around">
        {sidebarFunctions.map((value, index) => (
          <button key={index} className="hover:bg-shadowGray rounded-md">
            <div
              className={`flex justify-between items-center p-2 text-2xl ${value.name === "Disconnected"
                ? "text-primaryRed"
                : "text-txGray"
                } ${showSidebar && value.name !== "Disconnected" && "rotate-180"}`}
              onClick={() => value.onClick(setShowSidebar)}
            >
              <value.icon />
              {showSidebar && value.name !== "Open sidebar" && <span className="text-xs">{value.name}</span>}
            </div>
          </button>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
