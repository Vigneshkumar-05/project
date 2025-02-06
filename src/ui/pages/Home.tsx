import { useState } from "react";

import DeviceSelector from "../components/DeviceSelector/DeviceSelector";
import HomeFeaturesList from "../components/HomeFeaturesList";
import About from "../components/About";
import HardwareSetup from "../components/HardwareSetup";
import Setup from "../components/Setup";

const Home: React.FunctionComponent = () => {
  const [proceedStatus, setProceedStatus] = useState(false);
  const [configure, setConfigure] = useState(false);

  return (
    <>
      {!configure ? (
        <div className="max-h-full p-1 flex justify-between">
          <section className="max-h-full w-[50%] flex flex-col">
            <DeviceSelector setProceedStatus={setProceedStatus} />
            <div className="h-full flex items-center">
              <HomeFeaturesList />
            </div>
          </section>

          <section className="max-h-full w-[50%] flex items-center">
            {proceedStatus ? (
              <HardwareSetup setConfigure={setConfigure} />
            ) : (
              <About />
            )}
          </section>
        </div>
      ) : (
        <Setup />
      )}
    </>
  );
};

export default Home;
