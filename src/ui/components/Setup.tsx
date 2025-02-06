import React from "react";
import RightPanel from "./RightPanel/RightPanel";

const Setup: React.FunctionComponent = () => {
  return (
    <div className="h-full w-full flex justify-between">
      <section className="relative w-full bg-setup bg-contain bg-center bg-no-repeat"></section>
      <RightPanel />
    </div>
  );
};

export default Setup;
