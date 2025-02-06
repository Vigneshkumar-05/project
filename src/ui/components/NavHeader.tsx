import { useState, useRef, useEffect } from "react";
import { navigationRoutes } from "../config/routes";

const Navigation: React.FunctionComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef(null);

  const handleDropdown = (value: number | null) => setActiveDropdown(value);

  useEffect(() => {
    document.addEventListener("mousedown", () => handleDropdown(null));
    return () => {
      document.removeEventListener("mousedown", () => handleDropdown(null));
    };
  });

  return (
    <header className="flex items-center col-span-3 bg-primaryRed text-white">
      <div className="h-full mx-2 min-w-[10%] flex justify-center items-center text-xl font-bold">
        <h1 className="separator min-w-fit text-gray-100 whitespace-nowrap">
          Motor Studio
        </h1>
      </div>

      <nav className="h-full ml-[2%] min-w-[28%] flex justify-between items-center text-xsm">
        {navigationRoutes.map((value, index) => (
          <div key={index}>
            <span
              className="cursor-pointer"
              onClick={() => handleDropdown(index)}
            >
              {value.name}
            </span>

            {activeDropdown === index && (
              <div
                className="h-fit w-fit absolute top-10 flex flex-col bg-white text-black rounded-sm shadow-custom2"
                ref={dropdownRef}
              >
                {value.submenu.map((data, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-shadowGray rounded-sm"
                    onClick={() => {
                      data.action();
                      handleDropdown(index);
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
