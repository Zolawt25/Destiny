import {
  Language,
  PsychologyOutlined,
  SchoolOutlined,
  SquareFootOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="mt-24 lg:px-20 px-10 flex md:flex-row flex-col md:justify-between md:items-center">
        <div>
          <div className="flex gap-5 items-center mb-6">
            <span className="border rounded-full pt-2 pb-3 px-3 bg-[#F0F2FE] text-[#F96106]">
              <Language fontSize="small" />
            </span>
            <p className="text-xl text-gray-700">Know about classes</p>
          </div>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-main mb-5 md:mb-0">
            We create unique digital <br /> media experiences.
          </h1>
        </div>
        <div className="md:w-2/6 sm:w-[70%] text-gray-500 font-semibold">
          <p>
            Online courses from the world's leading experts. Lorem ipsum is
            simply dummy of the printing and typesetting industry lorem
          </p>
        </div>
      </div>
      <div className="mt-24 md:px-20 px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-16 gap-7">
        <div className="bg-[#F3F4F9] px-10 text-center relative rounded-2xl">
          <div className="text-[#F96106] border-white border-8 inline-block p-4 rounded-full bg-[#F3F4F9] absolute -top-10 left-32">
            <SchoolOutlined sx={{ fontSize: "50px" }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-20">
            Professional Educators
          </h3>
          <p className="text-sm text-gray-600 mt-3 mb-10">
            Get one-on-one help from our subject matter experts.
          </p>
        </div>
        <div className="bg-[#F3F4F9] px-10 text-center relative rounded-2xl">
          <div className="text-[#F96106] border-white border-8 inline-block p-4 rounded-full bg-[#F3F4F9] absolute -top-10 left-32">
            <PsychologyOutlined sx={{ fontSize: "50px" }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-20">
            Real-Time Support
          </h3>
          <p className="text-sm text-gray-600 mt-3 mb-10">
            Get one-on-one help from our subject matter experts.
          </p>
        </div>
        <div className="bg-[#F3F4F9] px-10 text-center relative rounded-2xl">
          <div className="text-[#F96106] border-white border-8 inline-block p-4 rounded-full bg-[#F3F4F9] absolute -top-10 left-32">
            <SupportAgentOutlined sx={{ fontSize: "50px" }} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-20">
            Free Access
          </h3>
          <p className="text-sm text-gray-600 mt-3 mb-10">
            Every course offers online tutoring at no additional charge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
