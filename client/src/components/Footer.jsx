import {
  EmailOutlined,
  FacebookOutlined,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F96106]">
      <div className="bg-[#F96106]  max-w-[1500px] mx-auto">
        <div className="flex flex-wrap justify-between sm:px-20 px-10 py-20">
          <div className="">
            <p className="text-[40px] text-[#1E1E2F]">
              <img src="/logo.png" alt="" className="w-[50px]" />
            </p>
            <p className="text-gray-50 my-3 text-sm">
              Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing elit.
            </p>
            <p className="text-gray-50 mt-3 text-sm">Got Questions? Call us</p>
            <b className="text-xl font-semibold text-gray-200">
              +670 413 90 762
            </b>
            <p className="text-gray-50 mt-3">
              <EmailOutlined /> acadia@gmail.com
            </p>
          </div>
          <div className="">
            <p className="text-xl font-semibold text-gray-100 mb-4">About</p>
            <div className="flex flex-col gap-1 text-sm text-gray-50 hover:[&>*]:text-primary">
              <a href="/">About Us</a>
              <a href="/">Courses</a>
              <a href="/">News & Blogs</a>
              <a href="/">Become a Teacher</a>
              <a href="/">Events</a>
              <a href="/">Contact</a>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-semibold text-gray-100 mb-4">
              Quick links
            </p>
            <div className="flex flex-col gap-1 text-sm text-gray-50 hover:[&>*]:text-primary">
              <a href="/">Students</a>
              <a href="/">Addmition</a>
              <a href="/">Faculty & Staffs</a>
              <a href="/">Media Relations</a>
              <a href="/">Alumni</a>
              <a href="/">Visit</a>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-semibold text-gray-100 mb-4">
              Our Newsletter
            </p>
            <p className="text-gray-50 my-3 text-sm">
              Enter your email and we'll send you <br /> more information
            </p>
            <div className=" bg-[#fff] p-2 rounded sm:w-[350px] flex shadow">
              <input
                type="text"
                placeholder="Your email"
                className=" placeholder:text-sm w-full"
              />
              <button className="px-6 py-2 bg-[#F96106] text-white font-semibold rounded-md">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 mt-6">
              <a href="/" className="text-blue-600">
                <FacebookOutlined />
              </a>
              <a href="/" className="text-blue-400">
                <Twitter />
              </a>
              <a href="/" className="text-blue-800">
                <LinkedIn />
              </a>
              <a href="/" className="text-red-700">
                <YouTube />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center py-5 text-gray-50">
          © 2024 Acadia. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
