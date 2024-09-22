import React from "react";
import { Link } from "react-router-dom";

const Events = ({ events }) => {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-7">
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
                  <h4 className="text-2xl font-semibold text-main">
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

export default Events;
