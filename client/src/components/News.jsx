import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const News = () => {
  const [news, setNews] = useState([]);
  let date = new Date(news.createdAt).toString().slice(0, 16);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news`);
      setNews(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="md:px-20 px-10">
      {isLoading ? (
        <Loading />
      ) : news.length === 0 ? (
        <div className="text-center text-gray-600 h-64 flex items-center *:w-full">
          <p>sorry we haven't posted any thing yet</p>
        </div>
      ) : (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {news.map((item, index) => {
            let date = new Date(item.createdAt).toString().slice(0, 16);
            return (
              <Link
                to={`/news/${item._id}`}
                key={index}
                className="hover:scale-105 duration-200 ease-in-out border hover:shadow-lg rounded-[10px_10px]"
              >
                <div className="rounded-[10px_10px_0_0] overflow-hidden w-full flex">
                  <img src={item.img} alt="" className="w-full" />
                </div>
                <div className="px-2 pb-4">
                  <div className="mt-4 mb-2">
                    <p className="text-sm font-semibold text-gray-700">
                      {date}
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
      )}
    </div>
  );
};

export default News;
