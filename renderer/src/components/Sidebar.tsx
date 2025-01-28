import { sidebarTopItems, sidebarBottomItems } from "../config/SidebarItems";

type itemType = {
  name: string;
  icon: string;
  tooltip: string;
  action?: () => void;
};

type SidebarItemsPropsType = {
  items: itemType[];
};

const SidebarItems: React.FunctionComponent<SidebarItemsPropsType> = ({
  items,
}) => {
  return (
    <div className="h-full flex flex-col justify-between">
      {items.map((value, index) => (
        <div
          key={index}
          onClick={value.action}
          className="m-1 p-[0.35rem] icon-container-style cursor-pointer"
        >
          <img title={value.tooltip} src={value.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

const Sidebar: React.FunctionComponent = () => {
  return (
    <aside className="h-full bg-white shadow-md">
      <div className="h-[95%] flex flex-col justify-between items-center">
        <section className="min-h-[55%]">
          <SidebarItems items={sidebarTopItems} />
        </section>

        <section className="h-[13%] p-[0.1rem] flex flex-col justify-around">
          <SidebarItems items={sidebarBottomItems} />
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
