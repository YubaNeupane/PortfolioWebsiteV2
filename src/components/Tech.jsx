import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {technologies.map((technology) => (
        <div className="flex w-28 h-35 flex-col justify-center items-center">
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
