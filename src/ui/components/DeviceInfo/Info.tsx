import { useState, useEffect } from "react";
import { useDeviceContext } from "../../context/DeviceContext";

import info from "../../config/info";
import video from "../../assets/video/wave.mp4";

type currentSelectedDeviceType = {
  header: string;
  heroContent: string;
  name: string;
  footer: string;
};

const Info: React.FunctionComponent = () => {
  const { deviceName } = useDeviceContext();
  const [currentSelectedDevice, setCurrentSelectedDevice] =
    useState<currentSelectedDeviceType>(info[0]);

  useEffect(() => {
    if (deviceName === "") {
      setCurrentSelectedDevice(info[0]); // default about
    } else {
      info.forEach((data) => {
        if (deviceName === data.name) {
          setCurrentSelectedDevice(data);
        }
      });
    }
  }, [deviceName]);

  return (
    <div className="h-[99%] flex flex-col justify-evenly bg-white shadow-lg">
      <header className="text-lg font-bold">
        <p className="px-2 custom-underline">{currentSelectedDevice.header}</p>
      </header>

      <main className="h-fit px-1 flex justify-center items-center">
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
            alt="Work flow image info the specified device"
          />
        )}
      </main>

      <footer>
        <p
          className="h-[20rem] p-3 overflow-auto scroll-smooth text-xsm font-stretch-normal text-txGray
 tracking-wide text-justify leading-7"
        >
          {currentSelectedDevice.footer}
        </p>
      </footer>
    </div>
  );
};

export default Info;
