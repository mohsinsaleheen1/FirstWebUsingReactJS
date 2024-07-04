import React from "react";
import { IoIosContact } from "react-icons/io";
function Plan() {
  return (
    <>
      <div className="max-w-full flex md:justify-around flex-wrap gap-3 mx-auto py-[100px] justify-center">
        <div className="h-[500px] shadow-xl hover:scale-105 duration-500 bg-blue-100 my-3 md:my-0 cursor-pointer w-[400px]">
          <div className="flex flex-col items-center py-3 mx-2 my-3">
            <IoIosContact className="text-8xl" />
            <h1 className="text-2xl py-2 font-bold">Web Development</h1>
            <h1 className="py-3 text-5xl font-extrabold text-[#00df9a]">
              $149
            </h1>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center px-5">
              Lorem, ipsum dolor sit amet consectetur elit. Non, praesentium!
            </p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <button className="w-[180px] bg-black text-[#00df9a] font-bold p-2 md:p-3 rounded mt-3 md:mt-5">
              Start Trial
            </button>
          </div>
        </div>
        <div className="h-[500px] shadow-xl hover:scale-105 duration-500 bg-blue-100 my-3 md:my-0 cursor-pointer w-[400px] mx-2">
          <div className="flex flex-col items-center py-3 mx-2">
            <IoIosContact className="text-8xl" />
            <h1 className="text-2xl py-2 font-bold">Web Development</h1>
            <h1 className="py-3 text-5xl font-extrabold text-[#00df9a]">
              $149
            </h1>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center px-5">
              Lorem, ipsum dolor sit amet consectetur elit. Non, praesentium!
            </p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <button className="w-[180px] bg-black font-bold p-2 md:p-3 rounded mt-3 md:mt-5 text-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>
        <div className="h-[500px] shadow-xl hover:scale-105 duration-500 bg-blue-100 my-3 md:my-0 cursor-pointer w-[400px] mx-2">
          <div className="flex flex-col items-center py-3 mx-2">
            <IoIosContact className="text-8xl" />
            <h1 className="text-2xl py-2 font-bold">Web Development</h1>
            <h1 className="py-3 text-5xl font-extrabold text-[#00df9a]">
              $149
            </h1>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center px-5">
              Lorem, ipsum dolor sit amet consectetur elit. Non, praesentium!
            </p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <p className="py-3 text-center">Lorem ipsum dolor sit amet.</p>
            <div className="h-[1px] w-[350px] bg-slate-300"></div>
            <button className="w-[180px] bg-black text-[#00df9a] font-bold p-2 md:p-3 rounded mt-3 md:mt-5">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
