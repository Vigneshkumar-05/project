import { useState, useEffect } from "react";
import { useDeviceContext } from "../context/DeviceContext";

import about from "../config/AboutList";
import video from "../assets/video/wave.mp4";

type currentSelectedDeviceType = {
  header: string;
  heroContent: string;
  name: string;
  footer: string;
};

const About: React.FunctionComponent = () => {
  const { deviceName } = useDeviceContext();
  const [currentSelectedDevice, setCurrentSelectedDevice] =
    useState<currentSelectedDeviceType>(about[0]);

  useEffect(() => {
    if (deviceName === "") {
      setCurrentSelectedDevice(about[0]);
    } else {
      about.forEach((data) => {
        if (deviceName === data.name) {
          setCurrentSelectedDevice(data);
        }
      });
    }
  }, [deviceName]);

  return (
    <div className="h-[94%] flex flex-col justify-evenly bg-white shadow-lg">
      <header className="text-lg font-bold">
        <p className="px-2 custom-underline">{currentSelectedDevice.header}</p>
      </header>

      <main className="h-[60%] px-1 flex justify-center items-center">
        {deviceName === "" ? (
          <video
            width={"100%"}
            height={"100%"}
            onClick={() => window.navigationApi.openScriptWindow()}
            controls
          >
            <source src={video} type="video/mp4" />
            <p>Video tag is not represented</p>
          </video>
        ) : (
          <img
            src={currentSelectedDevice.heroContent}
            alt="Work flow image about the specified device"
          />
        )}
      </main>

      <footer>
        <p
          className="h-[14rem] p-3 overflow-auto scroll-smooth text-sm font-stretch-normal
 tracking-wide text-justify leading-7"
        >
          {currentSelectedDevice.footer}
        </p>
      </footer>
    </div>
  );
};

export default About;
