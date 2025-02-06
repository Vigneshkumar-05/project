import React from "react";
import Button from "./Button";
import image from "../assets/images/EVM.png";

type HardwareSetupPropsType = {
  setConfigure: React.Dispatch<React.SetStateAction<boolean>>;
};

const setUpConfig = [
  {
    header: "Hardware Setup",
    footer: [
      "Connect motor phases to A, B, C on connector J11",
      "Do not turn on the power supply yet. Connect motor supply to PVDD and GND on connector J10",
      "Select J6 to 5V_USB and J8 to 3V3COM to power MSP430 from USB power supply",
      "Connect the micro-USB cable into the computer",
      "Turn the potentiometer fully clockwise to set the motor to zero speed upon powerup",
      "Flip the switch S1 to the top to configure BRAKE = RUN, switch S2 to the top to configure DRVOFF = ON, switch S3 to the bottom to configure DIR = ABC, and switch S4 to the bottom to configure to WAKE",
      "Flip the switch SW1 to left to configure SPEED/WAKE pin to SPEED mode and DACOUT/SOx/SPEED_ANA pin to DACOUT mode. Note that flipping the switch SW1 to right will configure SPEED/WAKE pin to WAKE mode and DACOUT/SOx/SPEED_ANA pin to SPEED_ANA mode. When SW1 is flipped to right, switch S4 can be used to put the device in SLEEP or WAKE mode and potentiometer R47 can be used to apply analog voltage to the DACOUT/SOx/SPEED_ANA pin",
      "Select J12 to leftmost position(closer to C6) to apply AVDD to VREG",
      "Select J13 to middle position to apply analog voltage from potentiometer R47 to SPEED/WAKE pin",
      "Turn on the motor power supply",
      "Use the potentiometer R47 to control the speed of the motor and the switches to disable the motor driver, change the direction, or apply a brake to the motor. Optionally, use the GUI (as shown in Section 6) to monitor real-time speed of the motor, put the MCF8329A into a low-power sleep mode, and read status of the LEDs.",
    ],
  },
];

const HardwareSetup: React.FunctionComponent<HardwareSetupPropsType> = ({
  setConfigure,
}) => {
  return (
    <div className="py-2 h-[99%] flex flex-col justify-between bg-white shadow-lg rounded-md">
      <header className="text-lg font-bold">
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
        {setUpConfig[0].footer.map((data, index) => (
          <p
            key={index}
            className="px-3 scroll-smooth font-stretch-normal text-xsm text-justify text-txGray leading-7"
          >
            {index + 1}. {data}
          </p>
        ))}
      </section>

      <footer className="h-14 w-full md:w-[60%] flex justify-between items-center">
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
