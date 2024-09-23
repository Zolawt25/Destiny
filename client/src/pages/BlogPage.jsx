import { HomeOutlined, Search } from "@mui/icons-material";
import React from "react";
import BlogBanner from "../components/BlogBanner";
import Blogs from "../components/Blogs";

const BlogPage = () => {
  return (
    <div>
      <div className="sm:px-20 px-10 mt-28">
        <div className="flex items-center gap-2 text-gray-700 text-sm mb-5">
          <HomeOutlined fontSize="small" /> <p>| Blogs</p>
        </div>
        <div>
          <h1 className="text-main sm:text-6xl text-4xl font-bold mb-4">
            Blog & Stories
          </h1>
          <p className="text-gray-600 mb-8">
            Discover articles and tutorials to help you build better.
          </p>
        </div>
      </div>
      <div className="sm:px-20 px-10">
        <div className="flex items-center flex-wrap gap-3">
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Art & Design
          </button>
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Business
          </button>
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Data Science
          </button>
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Finance
          </button>
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Lifestyle
          </button>
          <button className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white">
            Marketing
          </button>
          <div>
            <button className="bg-[#fda674] px-3 py-2 rounded-full text-gray-800 shadow">
              <Search fontSize="small" />
            </button>
          </div>
        </div>
        <div className="mt-10">
          <BlogBanner />
        </div>
        <div className="my-10">
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
