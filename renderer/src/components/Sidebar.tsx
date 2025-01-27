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
    <div>
      {items.map((value, index) => (
        <div
          key={index}
          onClick={value.action}
          className="m-1 p-[0.6rem] icon-container-style cursor-pointer"
        >
          <img title={value.tooltip} src={value.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

const Sidebar: React.FunctionComponent = () => {
  return (
    <aside className="h-full flex flex-col justify-between items-center bg-white shadow-md">
      <section className="h-[50%] flex flex-col justify-between">
        <SidebarItems items={sidebarTopItems} />
      </section>

      <section className="h-[15%] flex flex-col justify-around">
        <SidebarItems items={sidebarBottomItems} />
      </section>
    </aside>
  );
};

export default Sidebar;
