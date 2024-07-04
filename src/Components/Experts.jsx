import React from "react";
import laptop from "../images/laptop.png";
function Experts() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto my-10 grid md:grid-cols-2">
        <div className="col-span-1 w-[100%] md:w-[80%] flex justify-center">
          <img src={laptop} className="inline" />
        </div>
        <div className="col-span-1 flex justify-center flex-col text-center md:text-left">
          <h1 className="uppercase text-[#00df9a] font-bold my-2">
            Learn From Experts
          </h1>
          <p className="md:my-2 my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit dolorem praesentium corporis ipsum et nobis
            architecto, sunt eligendi dicta aspernatur neque harum veritatis
            perspiciatis repellat repudiandae vel veniam odit quas?
          </p>
          <button className="md:w-[30%] bg-black text-white p-3 rounded mt-3 md:mt-5">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Experts;
