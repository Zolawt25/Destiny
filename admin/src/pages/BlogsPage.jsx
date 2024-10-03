import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "../components/Blogs";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      setBlogs(res.data);
      setLoading(false);
    };
    fetchData();
  }, [deleted]);

  return (
    <div className="">
      <div className="py-10 px-5">
        <h1 className="text-center uppercase text-3xl font-bold text-[#070b22] mb-4">
          Blog dashboard
        </h1>
        <div className="bg-white shadow-md">
          <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
            manage blog posts
          </p>
          <div className="px-3 py-3 ">
            <a
              href="/add-blog"
              className="bg-[#ffa216] px-3 py-1 uppercase text-sm text-gray-50"
            >
              create new blog post
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
                    blogs.map((item, index) => {
                      return (
                        <Blogs key={index} {...item} setDeleted={setDeleted} />
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

export default BlogPage;
