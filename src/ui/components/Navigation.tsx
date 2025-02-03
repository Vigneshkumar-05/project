import { useState } from "react";
import NavItems from "../config/NavItems";

declare global {
  interface Window {
    navigationApi: {
      openScriptWindow: () => void;
    };
  }
}

const Navigation: React.FunctionComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleOpenDropdown = (index: number) => setActiveDropdown(index);

  const handleCloseDropdown = () => setActiveDropdown(null);

  return (
    <header className="flex items-center col-span-3 bg-[#c00] text-white">
      <div className="h-full mx-2 min-w-[10%] flex justify-center items-center text-xl font-bold">
        <h1 className="separator min-w-fit text-gray-100 whitespace-nowrap">
          Motor Studio
        </h1>
      </div>
      <nav className="h-full ml-[1rem] min-w-[24rem] flex justify-between items-center text-xs">
        {NavItems.map((value, index) => (
          <div key={index}>
            <span
              className="cursor-pointer"
              onClick={() => handleOpenDropdown(index)}
            >
              {value.name}
            </span>

            {activeDropdown === index && (
              <div
                className="h-fit absolute top-10 flex flex-col bg-gray-100 text-gray-800 "
                onMouseLeave={handleCloseDropdown}
              >
                {value.submenu.map((data, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 block cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      data.action();
                      handleCloseDropdown();
                    }}
                  >
                    {data.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
