import React from "react";

const BlogBanner = () => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div>
        <img src="/blog-stories-banner.jpg" alt="" />
      </div>
      <div className="absolute top-0 md:p-10 p-3">
        <p className="bg-[#F9E4B4] font-semibold text-sm px-6 py-2 rounded-full text-gray-800 shadow inline-block sm:mb-5 mb-1">
          Art & Design
        </p>
        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-lg text-white font-bold">
          The Importance of Intrinsic <br /> Motivation for Students
        </h2>
      </div>
    </div>
  );
};

export default BlogBanner;
