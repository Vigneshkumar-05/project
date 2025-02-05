import { SetStateAction, useState } from "react";

import Input from "./Input";

import { FaCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { useDeviceContext } from "../../context/DeviceContext";

type DeviceSelectorPropsType = {
  setProceedStatus: React.Dispatch<SetStateAction<boolean>>;
};

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

const DeviceSelector: React.FunctionComponent<DeviceSelectorPropsType> = ({
  setProceedStatus,
}) => {
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

    <div className="py-3 w-[40%] grid grid-rows-5 grid-cols-[25%_1fr] gap-1 bg-[#ffffff] rounded-md shadow-custom">
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

      <section className="h-full flex items-center text-gray-800">
        {deviceName != "" ? (
          <h1>{deviceName}</h1>
        ) : (
          <h1>Hardware Not Detected</h1>
        )}
      </section>

      <br />

      <section className="h-full max-w-[28ch] text-gray-400 text-xs font-semibold">
        {deviceName != "" ? (
          <div className="h-full flex flex-col justify-around">
            <p>EVM Not Connected</p>
            <p>Device Selected : {deviceName}</p>
          </div>
        ) : (
          <p>Please plug your target device into your computer's USB port</p>
        )}
      </section>

      <div className="h-full flex justify-end items-center">
        {deviceName == "" && (
          <IoWarningOutline className="text-red-700 mr-[10%]" />
        )}
      </div>

      <section className="h-full flex items-center">
        {deviceName == "" && (
          <p className="text-red-700 text-xs">
            Select device from the dropdown.
          </p>
        )}
      </section>

      <section className="col-span-2 h-full flex justify-start items-center text-md">
        {deviceName != "" && (
          <div className="h-[55%] w-[65%] flex justify-around">
            <button
              onClick={() => setProceedStatus(true)}
              className="px-[5%] text-sm  bg-[#c00] text-white rounded-sm"
            >
              Proceed
            </button>
            <button className="px-[6%] text-sm text-[#c00] rounded-sm border-[#c00] border-2">
              Re-Scan
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default DeviceSelector;
