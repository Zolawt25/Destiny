import { HomeOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { blogs } from "../assets/blogs";
import { Link } from "react-router-dom";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState(blogs[2]);
  const recentBlogs = blogs.filter((item) => {
    if (item.isNew === true) {
      return item;
    }
  });
  console.log(recentBlogs);
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-5 bg-[#F2F7FD] px-20 py-5">
        <HomeOutlined fontSize="small" /> <p>| Blogs</p> <p>| {blog.title}</p>
      </div>
      <div className=" px-20">
        <div className="mt-20">
          <p className="bg-[#EFE9FE] px-3 py-1 rounded-full text-sm inline-block mb-5">
            {blog.category}
          </p>
          <h1 className="text-7xl font-semibold text-gray-950 mb-5">
            {blog.title}
          </h1>
          <div className="flex gap-3 text-gray-800 mb-14">
            <p className="border-r pr-3">{blog.createdAt}</p>
            <p>2 Comments</p>
          </div>
        </div>
        <div className="w-full">
          <img src={blog.img} alt="" className="w-full rounded-xl" />
        </div>
        <div className="mt-14 flex gap-20">
          <div className="">
            <div className="mb-10">
              <p className="text-lg text-main">{blog.description}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">2 Comments</p>
              <div>
                <div className="flex gap-4 border-b py-8">
                  <div>
                    <img src="/user.png" alt="" className="w-[65px]" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-gray-900">
                        Chigusa Kisa
                      </p>
                      <p className="text-sm text-gray-600">July 21, 2020 </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        I love the way the instructor goes about the course. So
                        easy to follow, even though a little bit challenging as
                        expected.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 border-b py-8">
                  <div>
                    <img src="/user.png" alt="" className="w-[65px]" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <p className="text-lg font-semibold text-gray-900">
                        Chigusa Kisa
                      </p>
                      <p className="text-sm text-gray-600">July 21, 2020 </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        I love the way the instructor goes about the course. So
                        easy to follow, even though a little bit challenging as
                        expected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <p className="text-3xl font-bold text-gray-900 ">
                  Leave a Reply
                </p>
                <form className="mt-10">
                  <div className="w-full mb-3">
                    <p className="text-main text-sm font-semibold mb-2">
                      Your Name
                    </p>
                    <input
                      type="text"
                      className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4 bg-transparent"
                    />
                  </div>
                  <div className="mb-3">
                    <p className="text-main text-sm font-semibold mb-2">
                      Your comment
                    </p>
                    <textarea
                      name=""
                      id=""
                      rows={6}
                      className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4"
                    ></textarea>
                  </div>
                  <button className="px-16 rounded-lg shadow-md py-4 bg-primary text-white font-semibold mb-5">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="w-[110rem] text-main sticky top-28">
            <div className="">
              <p className="text-[22px] font-semibold">Recent Posts</p>
              <div>
                {recentBlogs.map((item, index) => {
                  return (
                    <Link to={`/blogs/22`} key={index}>
                      <div className="py-3 border-b">
                        <p className="bg-[#DFF9F0] px-3 py-1 inline-block rounded-lg text-sm mb-3">
                          {item.category}
                        </p>
                        <p className="text-lg font-semibold mb-3 hover:text-primary">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {item.createdAt}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
