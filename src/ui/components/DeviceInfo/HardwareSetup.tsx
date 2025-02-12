import React from "react";

import Button from "../Button";
import deviceSetup from "../../config/setup";

import image from "../../assets/images/EVM.png";

type HardwareSetupPropsType = {
  setConfigure: React.Dispatch<React.SetStateAction<boolean>>;
};

function HardwareSetup({ setConfigure }: HardwareSetupPropsType): JSX.Element {

  return (
    <div className="py-2 h-[99%] flex flex-col justify-between bg-white shadow-lg rounded-md">
      <header className="font-bold text-lg">
        <p className="px-2 custom-underline">Hardware Setup</p>
      </header>

      <section className="flex justify-center items-center">
        <img
          width={"75%"}
          height={"90%"}
          src={image}
          alt="Work flow image about the specified device"
        />
      </section>

      <section className="h-[300px] w-full overflow-auto">
        {deviceSetup[0].footer.map((data, index) => (
          <p
            key={index}
            className="px-3 scroll-smooth font-stretch-normal text-xsm text-justify text-txGray leading-7"
          >
            {index + 1}. {data}
          </p>
        ))}
      </section>

      <footer className="h-14 md:w-[60%] w-full  flex justify-between items-center">
        <div className="w-[65%] flex justify-around items-center">
          <input type="checkbox" className="w-8 h-5 accent-lgBlue" />
          <p className="text-lgBlue text-sm">
            Hardware setup has been done manually
          </p>
        </div>
        <Button
          name={"Setup Now"}
          position="primary"
          onClick={() => {
            setConfigure(true);
          }}
        />
      </footer>
    </div>
  );
};

export default HardwareSetup;
