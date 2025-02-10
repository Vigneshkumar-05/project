import React, { useState } from "react";
import Controls from "./Controls";
import Faults from "./Faults";
import Charts from "./Charts";
import Logs from "./Logs";

const RightPanel: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("Controls");

  const renderContent = () => {
    switch (activeTab) {
      case "Controls":
        return <Controls />;
      case "Faults":
        return <Faults />;
      case "Charts":
        return <Charts />;
      case "Logs":
        return <Logs />;
      default:
        return null;
    }
  };

  return (
    <div className="top-3 flex flex-col bg-white px-1.5 py-1 h-full">
      <div className="bg-gray-100 rounded-md flex p-1">
        <nav className="flex p-1 justify-evenly">
          {["Controls", "Faults", "Charts", "Logs"].map((tab) => (
            <button
              key={tab}
              className={`px-5 py-1 rounded-md text-sm font-medium ${activeTab === tab
                ? "bg-white text-black"
                : "text-black bg-gray-100"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      {renderContent()}
    </div>
  );
};

export default RightPanel;
