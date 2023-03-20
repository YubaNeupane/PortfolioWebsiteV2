import React from "react";
import { SectionWrapper } from "../hoc";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-0">
      <div className="flex w-full justify-center items-center gap-5">
        <div className="">
          <h1>GitHub</h1>
        </div>
        <div>
          <h1>GitHub</h1>
        </div>
        <div>
          <h1>GitHub</h1>
        </div>
      </div>
      <h1>&copy; 2023 Yuba Neupane</h1>
    </div>
  );
}

export default SectionWrapper(Footer, "");
