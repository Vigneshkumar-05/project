import React, { useState } from "react";
import { Switch } from 'antd';


const channels = [
  { id: 1, color: "bg-blue-400", label: "BUS_CURRENT" },
  { id: 2, color: "bg-red-500", label: "Select Channel" },
  { id: 3, color: "bg-purple-500", label: "Select Channel" },
  { id: 4, color: "bg-yellow-400", label: "Select Channel" }
];

const Charts: React.FunctionComponent = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>(
    channels.map((ch) => ch.label)
  );
  const [switchStates, setSwitchStates] = useState<boolean[]>(
    channels.map(() => false)
  );

  const handleChannelChange = (index: number, value: string) => {
    const newChannels = [...selectedChannels];
    newChannels[index] = value;
    setSelectedChannels(newChannels);
  };

  const toggleSwitch = (index: number) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
  };

  return (
    <div className="mt-2 w-full max-w-md mx-auto">
      {channels.map((channel, index) => (
        <div key={channel.id} className="border-b mb-1">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${channel.color}`}></div>
            <span className="text-xs  text-gray-600">channel {channel.id}</span>
          </div>
          <div className="mt-2 flex items-center justify-between gap-1">
            <select
              className="border p-1 w-full rounded text-xs text-gray-400"
              value={selectedChannels[index]}
              onChange={(e) => handleChannelChange(index, e.target.value)}
            >
              <option value="BUS_CURRENT">BUS_CURRENT</option>
              <option value="VOLTAGE">VOLTAGE</option>
              <option value="POWER">POWER</option>
            </select>
            <Switch size='small'/>
          </div>
          <div className="border mt-2 h-16 w-full bg-gray-100"></div>
        </div>
      ))}
      <div className="flex gap-2 mt-2 text-sm">
        <button className="bg-red-400 text-white px-4 py-1 rounded-sm">View Chart</button>
        <button className="bg-red-400 text-white px-4 py-1 rounded-sm">Play</button>
      </div>
    </div>
  );
};

export default Charts;