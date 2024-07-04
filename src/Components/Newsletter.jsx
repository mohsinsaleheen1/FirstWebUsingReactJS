import React from "react";

function Newsletter() {
  return (
    <>
      <div className="bg-[#2699fb] p-4 max-w-full flex justify-between flex-col md:flex-row mx-auto">
        <div className="py-3 px-4 md:text-left text-center">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">
            Want to learn latest I.T skills?
          </h1>
          <p className="text-[15px] text-white">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="py-3 px-4 md:text-left text-center">
          <input
            type="text"
            placeholder="Email"
            className="py-2 md:py-3 w-[230px] md:w-[300px] mx-2 px-2 text-gray-600"
          />
          <button className="w-[120px] bg-black text-white  p-2 md:p-3 rounded mt-3 md:mt-5">
            Notify me
          </button>
          <br />
          <p className="pt-3 px-5 text-white">
            We care about the protection of your date. Read our <br />
            <a href="#" className="text-black">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
