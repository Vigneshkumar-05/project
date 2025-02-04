import React from 'react';
import { FiSave, FiSlash } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";

const Logs: React.FunctionComponent = () => {
    return (
        <div>
            <div className='text-gray-500 flex space-x-3 justify-end mt-2 mb-2'>
                <BsFilter className='h-6 w-7' />
                <FiSave className='h-5 w-5' />
                <FiSlash className='h-5 w-5' />
            </div>
            <div className='text-xs text-gray-500 pl-1'>
                <p>
                    No Logs Available
                </p>
            </div>
        </div>
    );
};

export default Logs;