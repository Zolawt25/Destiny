import React from "react";
import { blogs } from "../assets/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-7">
        {blogs.map((item, index) => {
          return (
            <Link
              to={"/blogs/22"}
              key={index}
              className="hover:scale-105 duration-200 ease-in-out"
            >
              <div className="rounded-[10px_10px_0_0] overflow-hidden w-full flex bg-black">
                <img src={item.img} alt="" />
              </div>
              <div>
                <div className="flex gap-12 my-4">
                  <p className="bg-[#FDFFD0] px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </p>
                  <p className="text-sm text-gray-600">{item.createdAt}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
