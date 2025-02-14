import React, { useState } from "react";
import { Switch } from 'antd'; 

const channels = [
  { id: 1, color: "bg-blue-400", label: "Select Channel" },
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
        <div key={channel.id} className=" mb-1">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${channel.color}`}></div>
            <span className="text-xs  text-gray-500">channel {channel.id}</span>
          </div>
          <div className="mt-2 flex items-center justify-between gap-1">
            <select
              className="border p-1 w-60 rounded text-xs text-gray-400"
              value={selectedChannels[index]}
              onChange={(e) => handleChannelChange(index, e.target.value)}
            >
              <option value="ALGORITHM_STATE">ALGORITHM_STATE</option>
              <option value="FG_SPEED_FDBK">FG_SPEED_FDBK</option>
              <option value="BUS_CURRENT">BUS_CURRENT</option>
              <option value="PHASE_CURRENT_A">PHASE_CURRENT_A</option>
              <option value="PHASE_CURRENT_B">PHASE_CURRENT_B</option>
              <option value="PHASE_CURRENT_C">PHASE_CURRENT_C</option>
              <option value="CSA_GAIN_FEEDBACK">CSA_GAIN_FEEDBACK</option>
              <option value="VOLTAGE_GAIN_FEEDBACK">VOLTAGE_GAIN_FEEDBACK</option>
              <option value="VM_VOLTAGE">VM_VOLTAGE</option>
              <option value="PHASE_VOLTAGE_A">PHASE_VOLTAGE_A</option>
              <option value="PHASE_VOLTAGE_B">PHASE_VOLTAGE_B</option>
              <option value="PHASE_VOLTAGE_C">PHASE_VOLTAGE_C</option>
              <option value="SIN_COMMUTATION_ANGLE">SIN_COMMUTATION_ANGLE</option>
              <option value="COS_COMMUTATION_ANGLE">COS_COMMUTATION_ANGLE</option>
              <option value="IALPHA">IALPHA</option>
              <option value="IBETA">IBETA</option>
              <option value="VALPHA">VALPHA</option>
              <option value="VBETA">VBETA</option>
              <option value="ID">ID</option>
              <option value="IQ">IQ</option>
              <option value="VD">VD</option>
              <option value="VQ">VQ</option>
              <option value="IQ_REF_ROTOR_ALIGN">IQ_REF_ROTOR_ALIGN</option>
              <option value="SPEED_REF_OPEN_LOOP">SPEED_REF_OPEN_LOOP</option>
              <option value="IQ_REF_OPEN_LOOP">IQ_REF_OPEN_LOOP</option>
              <option value="SPEED_REF_CLOSED_LOOP">SPEED_REF_CLOSED_LOOP</option>
              <option value="IQ_REF_CLOSED_LOOP">IQ_REF_CLOSED_LOOP</option>
              <option value="ISD_STATE">ISD_STATE</option>
              <option value="ISD_SPEED">ISD_SPEED</option>
              <option value="IPD_STATE">IPD_STATE</option>
              <option value="IPD_ANGLE">IPD_ANGLE</option>
              <option value="ED">ED</option>
              <option value="EQ">EQ</option>
              <option value="SPEED_FDBK">SPEED_FDBK</option>
              <option value="THETA_EST">THETA_EST</option>
            </select>
            <Switch size='small'/>
          </div>
          <div className="border-l border-b mt-2 h-16 w-72 bg-gray-50"></div>
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