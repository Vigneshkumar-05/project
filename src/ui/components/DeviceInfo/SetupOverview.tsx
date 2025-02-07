import React from "react";
import RightPanel from "../RightPanel/RightPanel";
import image from "../../assets/images/EVM.png";

const SetupOverview: React.FunctionComponent = () => {
  return (
    <div className="h-full w-full flex justify-between">
      <section className="w-[90%] h-[90%]">
        <img
          src={image}
          alt=""
          useMap="#evm-map"
          width={"100%"}
          height={"100%"}
        />

        <map name="evm-map">
          <area
            shape="rect"
            coords="470,178,535,552"
            href="#"
            alt=""
            title="evm-detected"
          />
        </map>
      </section>
      <RightPanel />
    </div>
  );
};

export default SetupOverview;
