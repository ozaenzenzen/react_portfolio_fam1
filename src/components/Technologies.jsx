import React from "react";
import { BsAndroid2 } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { RiFlutterLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiFlutterFill className="text-7xl text-[#0553B1]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavaLine className="text-7xl text-[#007396]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGolang className="text-7xl text-[#5DC9E2]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsAndroid2 className="text-7xl text-[#3DDC84]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-[#68a063]" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
