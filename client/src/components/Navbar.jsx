import { Menu } from "@mui/icons-material";
import React, { useState } from "react";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changBackground = () => {
    if (window.scrollY >= 40) {
      setNavbarBgColor(true);
    } else {
      setNavbarBgColor(false);
    }
  };
  window.addEventListener("scroll", changBackground);
  console.log(isOpen);
  return (
    <div
      className={`${
        navbarBgColor && "bg-[#f95f06b7] backdrop-blur-md shadow"
      } sticky top-0 z-50`}
    >
      <div
        className={` px-10 md:px-20 py-2 flex items-center justify-between z-50 relative ${
          !isOpen && "overflow-hidden"
        } max-w-[1500px] mx-auto`}
      >
        <div>
          <a href="/" className="text-[40px] text-[#1E1E2F]">
            <img src="/logo.png" alt="" className="w-[50px]" />
          </a>
        </div>
        <div
          className={`flex lg:justify-end lg:w-full lg:*:ml-6 flex-col lg:flex-row absolute lg:relative  ${
            isOpen ? "right-0" : "-right-[100vw]"
          } lg:right-0 h-screen  lg:h-auto top-0 items-center justify-center w-[300px] gap-7 lg:gap-0 ${
            !navbarBgColor && "bg-[#f95f06b7]"
          } lg:bg-inherit backdrop-blur-md lg:backdrop-blur-none ${
            navbarBgColor && "bg-[#F96106]"
          } duration-500 ease-in-out`}
        >
          <a
            href="/"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Home
          </a>
          <a
            href="/blogs"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Blog
          </a>
          <a
            href="/news"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            News/Events
          </a>
          <a
            href="/gallery"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Gallery
          </a>
          <a
            href="/community"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Community
          </a>
          <a
            href="/donations"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Donations
          </a>
          <a
            href="/about"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            About Us
          </a>
          <a
            href="/contact"
            className={`hover:text-[#657AF5] font-semibold ${
              navbarBgColor ? "text-gray-50" : "text-gray-700 text-[15px]"
            }`}
          >
            Contact Us
          </a>
          <button
            className="absolute top-4 right-4 lg:hidden font-bold text-2xl text-gray-50"
            onClick={() => setIsOpen(false)}
          >
            x
          </button>
        </div>
        <button className="lg:hidden block" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
