import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const Input: React.FunctionComponent = () => {
  return (
    <div className="w-full col-span-2 center">
      <fieldset className="min-h-[115%] w-[90%] flex flex-wrap justify-evenly items-center border-2 border-gray-200 rounded-md focus-within:border-gray-500">
        <legend className="ml-[0.7rem] px-[0.2rem] text-xs text-gray-800  ">
          Select Device
        </legend>

        <div className="center">
          <input
            type="text"
            className="w-[80%] h-[2rem] cursor-text text-center bg-inherit focus:outline-gray-50"
            placeholder="Select Your Device"
          />
        </div>

        <div className="center">
          <IoClose className=" w-full text-xl text-gray-500 cursor-pointer icon-styles" />
        </div>

        <div className="center">
          <IoMdArrowDropdown className="text-xl text-gray-500 cursor-pointer icon-styles" />
        </div>
      </fieldset>
    </div>
  );
};

const DeviceSelector: React.FunctionComponent = () => {
  return (
    <div className="m-1 px-2 py-4 min-h-[45%] w-[42%] grid grid-rows-6 grid-cols-[20%_1fr] gap-1 bg-[#ffffff] rounded-md shadow-lg">
      <Input />
      <div className="w-full h-full flex justify-end items-center">
        <FaCircle className=" text-red-400 text-3xl mr-[10%]" />
      </div>

      <h1 className="text-lg text-start flex items-center text-gray-800">
        Hardware Not Detected
      </h1>

      <br />

      <p className="w-[70%] text-gray-400 text-xs font-semibold">
        Please plug your target device into your computer's USB port
      </p>

      <div className="flex justify-end items-center">
        <IoWarningOutline className="text-red-700 mr-[10%]" />
      </div>

      <div className="flex items-center">
        <p className="text-red-700">Select device from the dropdown.</p>
      </div>

      <div className="row-span-6 p-2 w-[10rem] flex justify-between items-end text-md">
        <button className="p-1 bg-red-700 text-white rounded-sm">
          Proceed
        </button>
        <button className="p-[0.15rem] text-red-700 rounded-sm border-red-600 border-2">
          Re-Scan
        </button>
      </div>
    </div>
  );
};

export default DeviceSelector;
