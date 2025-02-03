import { useState } from "react";

import DeviceSelector from "../components/DeviceSelector/DeviceSelector";
import HomeFeaturesList from "../components/HomeFeaturesList";
import About from "../components/About";
import HardwareSetup from "../components/HardwareSetup";

const Home: React.FunctionComponent = () => {
  const [proceedStatus, setProceedStatus] = useState(false);

  return (
    <div className="h-full p-1 flex justify-between">
      <section className="h-full w-[50%] flex flex-col">
        <DeviceSelector setProceedStatus={setProceedStatus} />
        <div className="h-[30%] flex items-end">
          <HomeFeaturesList />
        </div>
      </section>

      <section className="h-full w-[50%] flex items-center">
        {proceedStatus ? <HardwareSetup /> : <About />}
      </section>
    </div>
  );
};

export default Home;
