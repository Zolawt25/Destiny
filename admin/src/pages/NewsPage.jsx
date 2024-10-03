import React, { useEffect, useState } from "react";
// import { news } from "../assets/news";
import axios from "axios";
import News from "../components/News";
// import { useLocation } from "react-router-dom";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news`);
      setNews(res.data);
      setLoading(false);
    };
    fetchData();
  }, [deleted]);

  return (
    <div className="">
      <div className="py-10 px-5">
        <h1 className="text-center uppercase text-3xl font-bold text-[#070b22] mb-4">
          News dashboard
        </h1>
        <div className="bg-white shadow-md">
          <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
            manage News posts
          </p>
          <div className="px-3 py-3 ">
            <a
              href="/add-news"
              className="bg-[#ffa216] px-3 py-1 uppercase text-sm text-gray-50"
            >
              create new news post
            </a>
            <div className="overflow-x-scroll">
              <table className="*:bg-[#f8f9fa] w-full mt-4 *:text-sm text-gray-600 min-w-[850px]">
                <thead className="border-b *:py-1">
                  {/* <tr> */}
                  <th>Image</th>
                  <th>Title</th>
                  <th>Posted Date</th>
                  <th>Views</th>

                  <th>Actions</th>
                  {/* </tr> */}
                </thead>
                <tbody>
                  {loading ? (
                    <div className="w-full text-center">Loading...</div>
                  ) : (
                    news.map((item, index) => {
                      return (
                        <News key={index} {...item} setDeleted={setDeleted} />
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
