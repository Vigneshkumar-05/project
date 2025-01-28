import React from 'react';

const Controls: React.FunctionComponent = () => {
    return (
      <div className="border p-4 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-bold mb-2">I2C CONTROLS</h2>
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Speed Control via I2C</span>
            <button className="px-3 py-1 text-xs font-medium text-gray-600  rounded-full">Disabled</button>
        </div>
        <div className="mb-2">
            <label className="text-sm font-medium text-gray-400">I2C Target Address (GUI side)</label>
            <div className="flex items-center space-x-2 mt-1">
                <input 
                    type="text" 
                    value="0x0" 
                    className="border px-2 py-1 rounded-md text-sm text-gray-400 w-48" 
                    readOnly 
                />
                <button className="px-3 py-1 text-xs font-medium rounded-md border border-blue-500 text-blue-500">Find Address</button>
            </div>
        </div>
        <div>
            <label className="text-sm font-medium ">I2C Speed Command Percentage (%)</label>
            <div className="flex gap-2">
                <input type="range" min="0" max="100" className="w-60 mt-1" />
                <input 
                    type="number" 
                    value="0.00" 
                    className="border px-2 py-1 rounded-md text-sm w-16 mt-1" 
                    readOnly 
                />
            </div>
        </div>

        <div className="border p-4 rounded-lg shadow-md bg-white">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold">MOTOR STATUS</h2>
                <button className="px-3 py-1 text-xs font-medium text-white bg-gray-500 rounded-full">Disable</button>
            </div>
            <select className="border px-2 py-1 rounded-md w-full text-sm">
                <option>Status Select</option>
            </select>
            <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="border p-2 rounded-md">
                    <span className="text-gray-500">Algorithm State</span>
                    <p className="font-bold text-green-500">MOTOR_IDLE</p>
                </div>
                <div className="border p-2 rounded-md">
                    <span className="text-gray-500">VM Voltage</span>
                    <p className="font-bold">00.0 V</p>
                </div>
                <div className="border p-2 rounded-md">
                    <span className="text-gray-500">Reference for Speed Loop</span>
                    <p className="font-bold">00.0 Hz</p>
                </div>
                <div className="border p-2 rounded-md">
                    <span className="text-gray-500">Speed Feedback</span>
                    <p className="font-bold">00.0 Hz</p>
                </div>
            </div>
        </div>
        
        <div className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center">
            <span className="text-lg font-bold">EEPROM Controls</span>
            <button className="px-4 py-2 text-black border-red-600 rounded-md">EEPROM ▼</button>
        </div>
      </div>  
    );
};

export default Controls;