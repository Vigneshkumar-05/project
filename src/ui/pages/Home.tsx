import { useState } from "react";

import DeviceSelector from "../components/DeviceSelector/DeviceSelector";
import Links from "../components/Links";
import Info from "../components/DeviceInfo/Info";
import HardwareSetup from "../components/DeviceInfo/HardwareSetup";
import SetupOverview from "../components/DeviceInfo/SetupOverview";

const Home: React.FunctionComponent = () => {
  const [proceedStatus, setProceedStatus] = useState(false);
  const [configure, setConfigure] = useState(false);

  return (
    <>
      {!configure ? (
        <div className="max-h-full p-1 flex justify-between">
          <section className="max-h-full w-[50%] flex flex-col">
            <DeviceSelector proceedStatus={proceedStatus} setProceedStatus={setProceedStatus} />
            <div className="mt-3 h-full flex items-start">
              <Links proceedStatus={proceedStatus} />
            </div>
          </section>

          <section className="max-h-full w-[50%] flex items-center">
            {proceedStatus ? (
              <HardwareSetup setConfigure={setConfigure} />
            ) : (
              <Info />
            )}
          </section>
        </div>
      ) : (
        <SetupOverview />
      )}
    </>
  );
};

export default Home;
