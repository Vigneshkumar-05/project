import React from "react";
import { useState } from "react";
import { routes, sidebarFunctions } from "../config/routes";

type SidebarPropsType = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarPropsType> = ({ activeTab, setActiveTab }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <aside className={`h-full flex flex-col justify-between items-center bg-white shadow-custom1 ${showSidebar && "relative w-[400%]"}`} >
      <section className="h-[50%] w-[85%] flex flex-col justify-around">
        {routes.map((value, index) => (
          <button key={index} className="hover:bg-shadowGray rounded-md">
            <div
              className={`flex justify-between items-center p-1 text-2xl rounded-md ${value.name === "Disconnected"
                ? "text-primaryRed"
                : activeTab === index ? "text-lgBlue bg-blue-50" : "text-txGray"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {React.createElement(value.icon)}
              {showSidebar && <span className="text-xs">{value.name}</span>}
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
              {React.createElement(value.icon)}
              {showSidebar && value.name !== "Open sidebar" && <span className="text-xs">{value.name}</span>}
            </div>
          </button>
        ))}
      </section>
    </aside >
  );
};

export default Sidebar;
