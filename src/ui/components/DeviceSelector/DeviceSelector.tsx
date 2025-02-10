import { SetStateAction, useState } from "react";

import Button from "../Button";
import Input from "./Input";

import { FaCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { useDeviceContext } from "../../context/DeviceContext";

type DeviceSelectorPropsType = {
  proceedStatus: boolean;
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

function DeviceSelector({ proceedStatus, setProceedStatus }: DeviceSelectorPropsType) {
  const { deviceName, setDeviceName } = useDeviceContext();
  const [showDropdown, setShowDropdown] = useState(false);

  function handleDropdown(): void {
    setShowDropdown((prevState) => !prevState);
  };

  function handleDeviceSelection(i: number): void {
    setDeviceName(ls[i]);
  };

  return (
    <div className="py-3 w-[40%] grid grid-rows-5 grid-cols-[25%_1fr] gap-1 bg-white rounded-md shadow-custom1">
      <Input handleDropdown={handleDropdown} showDropdown={showDropdown} />

      <div className="absolute top-[7.5rem] left-[4.2rem] w-[16.5%] text-black text-start bg-white rounded-md">
        {showDropdown &&
          ls.map((d, i) => (
            <div
              key={i}
              className="p-2 cursor-pointer hover:bg-shadowGray"
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

      <section className="h-full flex items-center text-gray-900">
        {deviceName != "" ? (
          <h1>{deviceName}</h1>
        ) : (
          <h1>Hardware Not Detected</h1>
        )}
      </section>

      <br />

      <section className="h-full max-w-[28ch] text-gray-400 text-xsm font-semibold">
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
          <IoWarningOutline className="text-primaryRed mr-[10%]" />
        )}
      </div>

      <section className="h-full flex items-center">
        {deviceName == "" && (
          <p className="text-primaryRed text-xsm">
            Select device from the dropdown.
          </p>
        )}
      </section>

      <section className="col-span-2 h-full flex justify-start items-center text-md">
        {deviceName != "" && (
          <div className="h-[68%] w-[72%] flex justify-around">
            <Button
              name={"Proceed"}
              position={"primary"}
              onClick={() => setProceedStatus(true)}
              disabled={proceedStatus}
            ></Button>
            <Button
              name={"Re-Scan"}
              position={"secondary"}
              onClick={() => {
                setDeviceName("");
                setProceedStatus(false);
              }}
            ></Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default DeviceSelector;
