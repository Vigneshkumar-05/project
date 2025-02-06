import React from "react";
import { Link } from "react-router-dom";
import { sidebarTopItems, sidebarBottomItems } from "../config/SidebarItems";
import { IconType } from "react-icons/lib";

type itemType = {
  name: string;
  icon: IconType;
  tooltip: string;
  action?: string;
};

type SidebarItemsPropsType = {
  items: itemType[];
};

const SidebarItems: React.FunctionComponent<SidebarItemsPropsType> = ({
  items,
}) => {
  return (
    <div className="h-full flex flex-col justify-around">
      {items.map((value, index) => (
        <Link to={value.action!} key={index}>
          <button className="hover:bg-shadowGray rounded-md">
            <div
              className={`p-2 text-2xl ${
                value.name === "Disconnected"
                  ? "text-primaryRed"
                  : "text-txGray"
              }`}
            >
              {React.createElement(value.icon)}
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};

const Sidebar: React.FunctionComponent = () => {
  return (
    <aside className="h-full bg-white shadow-custom">
      <div className="h-[95%] flex flex-col justify-between items-center">
        <section className="h-[50%]">
          <SidebarItems items={sidebarTopItems} />
        </section>

        <section className="h-[14%] flex flex-col justify-around">
          <SidebarItems items={sidebarBottomItems} />
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
