import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#2699fb] py-[50px] justify-center md:justify-around max-w-full flex flex-wrap mx-auto gap-3">
        <div className="w-[600px] text-center md:text-left md:my-0 my-2">
          <h1 className="text-3xl px-3 font-bold">FirstWebUseReact</h1>
          <p className="px-3 py-3 text-white cursor-pointer text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ratione
            quaerat, in delectus necessitatibus fugit dolores totam repudiandae
            eius maiores nesciunt quas. Dignissimos molestias quisquam, quis
            harum porro laboriosam quidem fuga dolore sit.
          </p>
          <div className="flex justify-center md:justify-between gap-3 w-full md:w-[200px] px-3 py-3 text-2xl text-white cursor-pointer">
            <FaSquareFacebook />
            <FaInstagramSquare />
            <FaTwitter />
            <FaGithub />
          </div>
        </div>
        <div className="w-[200px]">
          <ul>
            <li className="text-[20px] font-semibold py-2">Solutions</li>
            <li className="py-1 text-white cursor-pointer">Analytics</li>
            <li className="py-1 text-white cursor-pointer">Marketing</li>
            <li className="py-1 text-white cursor-pointer">Commerce</li>
            <li className="py-1 text-white cursor-pointer">Insights</li>
          </ul>
        </div>
        <div className="w-[200px]">
          <ul>
            <li className="text-[20px] font-semibold py-2">Support</li>
            <li className="py-1 text-white cursor-pointer">Pricing</li>
            <li className="py-1 text-white cursor-pointer">Documentation</li>
            <li className="py-1 text-white cursor-pointer">Guides</li>
            <li className="py-1 text-white cursor-pointer">API Status</li>
          </ul>
        </div>
        <div className="w-[200px]">
          <ul>
            <li className="text-[20px] font-semibold py-2">Company</li>
            <li className="py-1 text-white cursor-pointer">About</li>
            <li className="py-1 text-white cursor-pointer">Blogs</li>
            <li className="py-1 text-white cursor-pointer">Jobs</li>
            <li className="py-1 text-white cursor-pointer">Career</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
