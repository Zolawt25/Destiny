import React from "react";

const BlogBanner = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div>
        <img src="/blog-stories-banner.jpg" alt="" />
      </div>
      <div className="absolute top-0 p-10">
        <p className="bg-[#F9E4B4] font-semibold text-sm px-6 py-2 rounded-full text-gray-800 shadow inline-block mb-5">
          Art & Design
        </p>
        <h2 className="text-5xl text-white font-bold">
          The Importance of Intrinsic <br /> Motivation for Students
        </h2>
      </div>
    </div>
  );
};

export default BlogBanner;
