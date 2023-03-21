import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/Ai";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mb-0 ">
      <div className="flex w-full justify-center items-center gap-10 text-center">
        <a
          className="flex flex-row items-center justify-center cursor-pointer"
          href={"https://github.com/YubaNeupane"}
          alt="github"
          target="_blank"
        >
          <AiFillGithub
            className="hover:text-cyan-300  transition-all "
            size={42}
          />
        </a>
        <h1 className="text-[20px]">&copy; 2023 Yuba Neupane</h1>
        <a
          className="flex flex-row items-center justify-center cursor-pointer"
          href={"https://www.linkedin.com/in/yuba-neupane/"}
          alt="linkedin"
          target="_blank"
        >
          <AiFillLinkedin
            className="hover:text-cyan-300  transition-all "
            size={42}
          />
        </a>
      </div>
    </div>
  );
}

export default SectionWrapper(Footer, "");
