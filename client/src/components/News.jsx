import React from "react";
import { Link } from "react-router-dom";

const News = ({ events }) => {
  return (
    <div className="md:px-20 px-10">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {events.map((item, index) => {
          return (
            <Link
              to={"/blogs/22"}
              key={index}
              className="hover:scale-105 duration-200 ease-in-out border hover:shadow-lg rounded-[10px_10px]"
            >
              <div className="rounded-[10px_10px_0_0] overflow-hidden w-full flex">
                <img src={item.img} alt="" className="w-full" />
              </div>
              <div className="px-2 pb-4">
                <div className="mt-4 mb-2">
                  <p className="text-sm font-semibold text-gray-700">
                    {item.createdAt}
                  </p>
                </div>
                <div>
                  <h4 className="sm:text-2xl text-xl font-semibold text-main">
                    {item.title}
                  </h4>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default News;
