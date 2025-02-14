import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Controls from "./Controls";
import Faults from "./Faults";
import Charts from "./Charts";
import Logs from "./Logs";

const RightPanel: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("Controls");
  const [isExpanded, setIsExpanded] = useState(true);

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
    <div className="flex h-full">
      <div>
        <div className="w-0.5 bg-gray-300 flex justify-center"> </div>
          <div className="align-bottom items-baseline">
            <button
              className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-100 bg-white shadow-sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <AiOutlineLeft /> : <AiOutlineRight /> }
            </button>
          </div>
      </div>
 
      {isExpanded && (
        <div className="flex flex-col bg-white px-1.5 py-1">
        <div className="bg-gray-100 rounded-md flex p-1">
          <nav className="flex p-0.5 justify-evenly">
            {["Controls", "Faults", "Charts", "Logs"].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-1 rounded-md text-sm font-medium ${
                  activeTab === tab
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
      )}
    </div>


  );
};

export default RightPanel;