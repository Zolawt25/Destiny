import { HomeOutlined, Search } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import BlogBanner from "../components/BlogBanner";
import Blogs from "../components/Blogs";
import axios from "axios";
import Loading from "../components/Loading";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const allCategories = [...new Set(blogs.map((item) => item.category))];

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/blogs?title=${title}&category=${category}`
      );
      setBlogs(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [category, title]);

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
        <div className="mt-10">
          <BlogBanner />
        </div>
        <div className="flex items-center flex-wrap gap-3 mt-10">
          <button
            onClick={() => setCategory("")}
            className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white"
          >
            All
          </button>
          {allCategories.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setCategory(item)}
                className="bg-[#fda674] px-6 py-2 rounded-full text-gray-800 shadow hover:bg-[#556DF5] hover:text-white"
              >
                {item}
              </button>
            );
          })}
          <div
            className={`bg-[#fda674c7] ${
              searchBar && "pl-4 pr-1 py-1"
            }  rounded-full`}
          >
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className={`mr-4 bg-transparent outline-none placeholder:text-sm placeholder:text-gray-900 text-sm w-auto  ${
                  searchBar ? "w-auto" : "w-0 hidden"
                }`}
                placeholder="search..."
              />
              <button
                className="bg-[#fda674] px-3 py-2 rounded-full text-gray-800 shadow"
                onClick={() => setSearchBar(!searchBar)}
              >
                <Search fontSize="small" />
              </button>
            </form>
          </div>
        </div>
        <div className="my-10">
          {isLoading ? <Loading /> : <Blogs blogs={blogs} />}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
