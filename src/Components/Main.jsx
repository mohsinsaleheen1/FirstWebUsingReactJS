import React from "react";
import { ReactTyped } from "react-typed";
function Main() {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[30px]">
        <div className="max-w-[1240px] py-[80px] mx-auto text-center font-bold">
          <div className="text-xl md:text-3xl md:p-[20px]">Learn with us</div>
          <h2 className="text-white text-5xl md:text-[50px] md:p[20px]">
            Grow with us
          </h2>
          <div className="text-[20px] md:text[50px] md:p-[20px] text-white">
            Learn
            <ReactTyped
              className="pl-2"
              strings={[
                "Web Development",
                "Ethical Hacking",
                "Data Structure Algorithum",
              ]}
              typeSpeed={100}
              loop={true}
              backSpeed={120}
            />
          </div>
          <button className="bg-black text-white p-3 rounded mt-3 md:mt-5">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
