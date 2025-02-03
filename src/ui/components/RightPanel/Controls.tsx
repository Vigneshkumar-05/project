import React from "react";

const Controls: React.FunctionComponent = () => {
  return (
    <div className="p-1">
      <div className="border px-2 py-2 rounded-md border-gray-200 mt-1">
        <h2 className="text-md font-bold mb-2">I2C CONTROLS</h2>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Speed Control via I2C</span>
          <button className="px-3 py-1 text-xs text-gray-800  rounded-full">
            Disabled
          </button>
        </div>
        <div className="mb-2">
          <label className="text-xs text-gray-400">
            I2C Target Address (GUI side)
          </label>
          <div className="flex items-center mt-1 justify-between">
            <input
              type="text"
              value="0x0"
              className="border px-2 py-1 rounded-md text-xs text-gray-400 w-52"
              readOnly
            />
            <button className="px-3 py-1 text-xs font-medium rounded-md border border-blue-800 text-blue-800">
              Find Address
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium ">
            I2C Speed Command Percentage (%)
          </label>
          <div className="flex justify-between">
            <input type="range" min="0" max="100" className=" mt-1 w-56" />
            <input
              type="number"
              value="0.00"
              className="border px-2 py-0.5 rounded-md w-16 text-sm mt-1"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="border px-2 py-2 rounded-md mt-2">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-md font-bold">MOTOR STATUS</h2>
          <button className="px-3 py-1 text-xs font-small text-gray-400 rounded-full">
            Disable
          </button>
        </div>
        <select className="border border-gray-200 px-2 py-1 text-sm text-gray-500 w-full">
          <option>Status Select</option>
        </select>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs w-fit ">
          <div className=" px-1 py-1.5 border rounded-md">
            <span className="text-gray-500">Algorithm State</span>
            <p className="font-medium text-blue-800">MOTOR_IDLE</p>
          </div>
          <div className=" px-1 py-1.5 border rounded-md">
            <span className="text-gray-500">VM Voltage</span>
            <p className=" font-medium text-blue-800">00.0 V</p>
          </div>
          <div className=" px-1 py-1.5 border rounded-md">
            <span className="text-gray-500">Reference for Speed Loop</span>
            <p className="font-medium text-blue-800">00.0 Hz</p>
          </div>
          <div className=" px-1 py-1.5 border rounded-md">
            <span className="text-gray-500">Speed Feedback</span>
            <p className="font-medium text-blue-800">00.0 Hz</p>
          </div>
        </div>
      </div>

      <div className="mt-2 border border-gray-200 px-2 py-2 rounded-md flex justify-between items-center">
        <span className="text-sm font-semibold">EEPROM Controls</span>
        <button className="border text-sm font-normal px-4 py-0.5 text-red-700 border-red-700 hover:bg-red-700 hover:text-white rounded-md">
          EEPROM ⯆
        </button>
      </div>
    </div>
  );
};

export default Controls;
