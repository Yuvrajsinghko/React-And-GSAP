import { Search } from "lucide-react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="pt-35 min-h-screen w-full flex px-50 gap-8 justify-between">
      <div className="hero-left w-[25%] flex flex-col gap-4 px-6 py-6 ">
        <h3 className="text-xl">Search Library</h3>
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-black"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search library"
            className="
          w-[95%]

          pl-10 py-2
          border rounded-md
          focus:outline-none 
        "
          />
        </div>
        <div className="flex flex-col text-xl gap-13 mt-6 ">
          <a href="#" className="px-4 text-[#381fd1]">
            Home
          </a>
          <a href="#" className="px-4 hover:text-[#381fd1]">
            Categories
          </a>
          <a href="#" className="px-4 hover:text-[#381fd1]">
            Collections
          </a>
        </div>
        <div className="bg-[#F3F2FC] min-h-auto px-6 py-7 flex flex-col gap-7">
          <h2 className="text-3xl font-bold">Contribute to Stark</h2>
          <p className="text-xl">Got any accessibility resources or news?</p>
          <button className="bg-[#381fd1] rounded-md px-2 py-3 text-[2vh] hover:scale-98 text-[#ffff]">
            Submit a Resource
          </button>
        </div>
      </div>
      <div className="hero-right w-[75%] bg-amber-500 p-4 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-extrabold text-6xl mb-3">New in the Library</h1>
            <p className="text-2xl font-semibold">Newly added accessibility resources, guides, and more.</p>
          </div>
          <a href="#" className="underline text-xl text-[#381fd1]">VIEW ALL</a>
        </div>
        <div>
          <HeroCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
