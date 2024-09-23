import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <div className="">
      <div className="text-main md:px-20 px-10 pt-32 pb-20">
        <p className="text-xl mb-1">About our classes</p>
        <h1 className="md:text-6xl text-3xl font-bold">
          We providing the <br />
          best quality online courses.
        </h1>
      </div>
      <div className="h-screen bg-[image:url(/header.jpg)] bg-cover flex items-center md:justify-end justify-center md:pr-36">
        <div className="bg-[#F8F8F8] sm:w-[500px] w-[300px] gap-5 sm:gap-0 flex p-10 rounded-lg sm:flex-row flex-col-reverse">
          <div className="flex-[1.6]">
            <p className="bg-[#F96106] inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-5">
              OUR STORIES
            </p>
            <p className="mb-5">
              When you design products and services in close partnership with
              clients, you are creating a solution that is tailored to their
              specific needs.
            </p>

            <a href="/" className="text-xs hover:text-primary font-semibold">
              MEET THE TEAM
              <span className="border rounded-full pt-2 pb-3 px-2 ml-2">
                <ArrowForwardIcon fontSize="small" />
              </span>
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-9xl font-bold text-[#F96106]">8</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
