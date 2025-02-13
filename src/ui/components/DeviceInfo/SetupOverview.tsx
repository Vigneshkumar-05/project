import { useState } from "react";
import RightPanel from "../RightPanel/RightPanel";
import image from "../../assets/images/EVM.png";

const TOP = [23.2, 8, 29.6, 74.6, 86.2, 86.2];
const LEFT = [41.7, 17.3, 4.5, 70, 18, 34];
const WIDTH = [4.8, 26, 8, 14, 8, 8];
const HEIGHT = [49.5, 11, 12, 15, 5, 5];

function SetupOverview(): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    <div className="p-1 h-full w-full flex justify-between items-center">
      <div className="flex flex-col justify-around items-end">
        <div className="max-w-full max-h-full relative center">
          <img src={image} alt="evm image" width={"100%"} height={"100%"} />
          <div className={`absolute top-[${TOP[index]}%] left-[${LEFT[index]}%] w-[${WIDTH[index]}%] h-[${HEIGHT[index]}%] bg-red-500 opacity-60 cursor-pointer transition-all duration-500 ease-in-out`} onClick={(e) => {
            console.log(e.target)
          }}>

          </div>
        </div>
        <div className="w-[20%] flex justify-between border-2 border-red-600">
          <button onClick={() => setIndex(index - 1)} disabled={index <= 0}>Prev</button>
          <button onClick={() => setIndex(index + 1)} disabled={index >= TOP.length - 1}>Next</button>
          <button>Skip</button>
        </div>
      </div>
      <RightPanel />
    </div>
  );
};

export default SetupOverview;
