import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Header = () => {
  return (
    <div className="">
      <div className="text-[#031F42] px-20 pt-32 pb-20">
        <p className="text-xl mb-1">About our classes</p>
        <h1 className="text-6xl font-bold">
          We providing the <br />
          best quality online courses.
        </h1>
      </div>
      <div className="h-screen bg-[image:url(/header.jpg)] bg-cover flex items-center justify-end pr-36">
        <div className="bg-[#F8F8F8] w-[45%] flex p-10 rounded-lg">
          <div className="flex-[1.6]">
            <p className="bg-[#5169F1] inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-5">
              OUR STORIES
            </p>
            <p className="mb-5">
              When you design products and services in close partnership with
              clients, you are creating a solution that is tailored to their
              specific needs.
            </p>

            <a href="/" className="text-xs hover:text-[#5169F1] font-semibold">
              MEET THE TEAM
              <span className="border rounded-full pt-2 pb-3 px-2 ml-2">
                <ArrowForwardIcon fontSize="small" />
              </span>
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-9xl font-bold text-[#031F42]">8</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
