import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className="font-['FoundersGrotesk'] text-[4vw] leading-[4vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className=" flex w-full pt-10 border-t-[2px] mt-20 border-[#a1b850]">
        <div className="w-1/2 ">
            <h1 className="text-[4vw]">Our approach</h1>
            <button className="flex gap-10 items-center uppercase px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white">Read More

                <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[75vh] bg-amber-500 rounded-4xl"></div>
      </div>
    </div>
  );
}

export default About;
