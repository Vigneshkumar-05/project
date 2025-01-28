import React, { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDeviceContext } from "../../context/DeviceContext";

type InputPropType = {
  handleDropdown: () => void;
  showDropdown: boolean;
};

const Input: React.FunctionComponent<InputPropType> = ({
  handleDropdown,
  showDropdown,
}) => {
  const { deviceName, setDeviceName } = useDeviceContext();

  return (
    <div className="w-full col-span-2 center cursor-text">
      <fieldset className="min-h-[115%] w-[90%] flex justify-evenly items-center border-2 border-gray-200 rounded-md focus-within:border-gray-500">
        <legend className="ml-[0.7rem] px-[0.2rem] text-xs text-gray-800  ">
          Select Device
        </legend>

        <div className="center">
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-full h-[2rem] cursor-text text-sm bg-inherit focus:outline-white"
            placeholder="Select Your Device"
          />
        </div>

        <div className="w-[20%] h-full flex justify-between items-center">
          <button
            className="center"
            onClick={() => {
              setDeviceName("");
            }}
          >
            <IoClose className=" w-full text-xl text-gray-500 cursor-pointer icon-styles" />
          </button>

          <button
            className={`center transition-transform duration-500 ease-in-out ${
              showDropdown ? "rotate-icon" : ""
            }`}
            onClick={() => {
              handleDropdown();
            }}
          >
            <IoMdArrowDropdown className="text-xl text-gray-500 cursor-pointer icon-styles" />
          </button>
        </div>
      </fieldset>
    </div>
  );
};

export default Input;
