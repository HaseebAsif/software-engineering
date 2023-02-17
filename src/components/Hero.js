import React from "react";
import LeftPanel from "./LeftPanel";
import MidPanel from "./MidPanel";
import RightPanel from "./RightPanel";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
      <LeftPanel />
      <MidPanel />
      <RightPanel />
    </div>
  );
};

export default Hero;
