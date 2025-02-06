import React from "react";
import { routes, sidebarFunctions } from "../config/routes";

type SidebarPropsType = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const Sidebar: React.FC<SidebarPropsType> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="h-full flex flex-col justify-between items-center bg-white shadow-custom1">
      <section className="h-[50%] flex flex-col justify-around">
        {routes.map((value, index) => (
          <button key={index} className="hover:bg-shadowGray rounded-md">
            <div
              className={`p-2 text-2xl ${value.name === "Disconnected"
                ? "text-primaryRed"
                : activeTab === index ? "text-lgBlue" : "text-txGray"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {React.createElement(value.icon)}
            </div>
          </button>
        ))}
      </section>

      <section className="h-[16%] flex flex-col justify-around">
        {sidebarFunctions.map((value, index) => (
          <button key={index} className="hover:bg-shadowGray rounded-md">
            <div
              className={`p-2 text-2xl ${value.name === "Disconnected"
                ? "text-primaryRed"
                : "text-txGray"
                }`}
            >
              {React.createElement(value.icon)}
            </div>
          </button>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
