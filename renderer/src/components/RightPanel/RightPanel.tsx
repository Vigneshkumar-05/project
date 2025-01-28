import React, { useState } from 'react';
import Controls from './Controls';
import Faults from './Faults';
import Charts from './Charts';
import Logs from './Logs';

const RightPanel: React.FunctionComponent = () => {
    const [activeTab, setActiveTab] = useState<string>('Controls');

    const renderContent = () => {
        switch (activeTab) {
            case 'Controls':
                return <Controls />;
            case 'Faults':
                return <Faults />;
            case 'Charts':
                return <Charts />;
            case 'Logs':
                return <Logs />;
            default:
                return null;
        }
    };

    return (
        <div className="top-3 flex flex-col bg-white border border-gray-300 rounded-lg shadow-lg">
            <nav className="flex space-x-1 border-spacing-10 bg-gray-100 p-2">
                {['Controls', 'Faults', 'Charts', 'Logs'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                            activeTab === tab? "bg-white text-black": "text-gray-600 hover:bg-gray-100 hover:text-black"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
            <div>{renderContent()}</div>
        </div>
    );
};

export default RightPanel;