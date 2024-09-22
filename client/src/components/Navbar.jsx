import React, { useState } from "react";

const Navbar = () => {
  const [navbarBgColor, setNavbarBgColor] = useState(false);

  const changBackground = () => {
    if (window.scrollY >= 40) {
      setNavbarBgColor(true);
    } else {
      setNavbarBgColor(false);
    }
  };
  window.addEventListener("scroll", changBackground);
  return (
    <div
      className={` px-20 py-2 ${
        navbarBgColor && "bg-[#ffffffba] backdrop-blur-md shadow"
      } sticky top-0 flex items-center justify-between z-50`}
    >
      <div>
        <a href="/" className="text-[40px] text-[#1E1E2F]">
          <span className="font-bold">Aca</span>dia
        </a>
      </div>
      <div className="flex justify-between w-[55%]">
        <a
          href="/"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Home
        </a>
        <a
          href="/blogs"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Blog
        </a>
        <a
          href="/news"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          News/Events
        </a>
        <a
          href="/gallery"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Gallery
        </a>
        <a
          href="/community"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Community
        </a>
        <a
          href="/donations"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Donations
        </a>
        <a
          href="/about"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="hover:text-[#657AF5] font-semibold text-gray-700 text-[15px]"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
