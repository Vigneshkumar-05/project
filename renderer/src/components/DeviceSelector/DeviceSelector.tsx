import { useState } from "react";

import Input from "./Input";

import { FaCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { useDeviceContext } from "../../context/DeviceContext";

// Temporary device list - (ipc req)
const ls = [
  "MCF8316C",
  "MCF8315A",
  "MCF8316A",
  "MCF8329A",
  "MCF8315C",
  "MCF8316D",
  "MCF8315D",
];

const DeviceSelector: React.FunctionComponent = () => {
  const { deviceName, setDeviceName } = useDeviceContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleDeviceSelection = (i: number) => {
    setDeviceName(ls[i]);
  };

  return (
    // update required for handling drop down

    <div className="m-1 px-2 py-4 min-h-[25%] w-[40%] grid grid-rows-6 grid-cols-[20%_1fr] gap-1 bg-[#ffffff] rounded-md shadow-lg">
      <Input handleDropdown={handleDropdown} showDropdown={showDropdown} />

      {/* Dropdown items */}
      <div className="absolute top-[7.5rem] left-[4.2rem] w-[16.5%] text-black text-start bg-gray-100 rounded-md">
        {showDropdown &&
          ls.map((d, i) => (
            <div
              key={i}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                handleDeviceSelection(i);
                handleDropdown();
              }}
            >
              <span>{d}</span>
            </div>
          ))}
      </div>

      <div className="w-full h-full flex justify-end items-center">
        <FaCircle className=" text-red-400 text-3xl mr-[10%]" />
      </div>

      <section className="text-start flex items-center text-gray-800">
        {deviceName != "" ? (
          <h1>{deviceName}</h1>
        ) : (
          <h1>Hardware Not Detected</h1>
        )}
      </section>

      <br />

      <section className="w-[85%] text-gray-400 text-xs font-semibold">
        {deviceName != "" ? (
          <div className="h-full flex flex-col justify-around">
            <p>EVM Not Connected</p>
            <p>Device Selected : {deviceName}</p>
          </div>
        ) : (
          <p>Please plug your target device into your computer's USB port</p>
        )}
      </section>

      <div className="flex justify-end items-center">
        {deviceName == "" && (
          <IoWarningOutline className="text-red-700 mr-[10%]" />
        )}
      </div>

      <section className="flex items-center">
        {deviceName == "" && (
          <p className="text-red-700 text-xs">
            Select device from the dropdown.
          </p>
        )}
      </section>

      <section className="row-span-3 p-2 w-[10rem] flex justify-between items-end text-md">
        {deviceName != "" && (
          <>
            <button className="p-2 text-sm  bg-red-500 text-white rounded-sm">
              Proceed
            </button>
            <button className="p-[0.39rem] text-sm text-red-500 rounded-sm border-red-500 border-2">
              Re-Scan
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default DeviceSelector;
