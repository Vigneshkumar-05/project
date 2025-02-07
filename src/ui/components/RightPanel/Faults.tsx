import { Switch } from 'antd';
import React from 'react';

const Faults: React.FunctionComponent = () => {
    return (
        <div className="p-1">
           <div className='flex gap-1 justify-between'>
                <div className="text-xs text-blue-700 left-0 w-52"> 
                    Auto Read Fault Status
                    <Switch size='small'/>
                </div>
                <div className="text-xs">
                    Show Faults List
                </div>
           </div>
           <div className="mt-2 flex gap-2">
                <button className="border text-xs font-normal px-2 py-0.5 text-red-700 border-red-700 hover:bg-red-700 hover:text-white rounded-md">Red Faults</button>
                <button className="border text-xs font-normal px-2 py-0.5 text-red-700 border-red-700 hover:bg-red-700 hover:text-white rounded-md">Clear Faults</button>
                <button className="border text-xs font-normal px-2 py-0.5 text-red-700 border-red-700 hover:bg-red-700 hover:text-white rounded-md">Configure</button>
           </div>
           <div className="h-96 content-center">
                <p className="text-sm text-center font-semibold items-center">No Faults Detected</p>
           </div>
        </div>
    );
};

export default Faults;