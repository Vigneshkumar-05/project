import { sidebarItems, sidebarBottomItems } from "./SidebarItems";

function Sidebar(): JSX.Element {
  return (
    <div className="flex flex-col justify-between items-center shadow-md">
      <div className="h-[50%] p-2 flex flex-col justify-between">
        {sidebarItems.map((value, index) => (
          <div key={index} className="icon-container-style">
            <img
              title={value.tooltip}
              src={value.icon}
              alt=""
              width={100}
              height={100}
              className="icon-styles"
              onClick={value.action}
            />
          </div>
        ))}
      </div>

      <div className="h-[15%] p-2 flex flex-col justify-around">
        {sidebarBottomItems.map((value, index) => (
          <div key={index} className="icon-container-style">
            <img
              title={value.tooltip}
              src={value.icon}
              alt=""
              width={100}
              height={100}
              className="icon-styles"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
