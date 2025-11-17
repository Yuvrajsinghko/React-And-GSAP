import React from "react";
import { MdArrowOutward } from "react-icons/md";
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 px-20">
        {["We create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index ===1 && (<div className=" mr-[1vw] w-[8.3vw] h-[5.5vw] bg-amber-600 rounded-md"></div>)}
                <h1 className='uppercase leading-[7vw]  text-[7vw] font-["TestFoundersGroteskX-Condensed"] font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-[5vw] flex justify-between items-center py-7 px-20">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 text-d font-light rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10  flex justify-center items-center rounded-full border-[2px] text-[26px] border-zinc-500 ">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
