import { HomeOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { blogs } from "../assets/blogs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const EventsDetailPage = () => {
  const [events, setEvents] = useState({});
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [commentAdded, setCommentAdded] = useState(false);
  const { id } = useParams();
  const [recentEvents, setRecentEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecentLoading, setIsRecentLoading] = useState(false);
  const [isCommentLoading, setIsCommentLoading] = useState(false);
  let date = new Date(events.createdAt).toString().slice(0, 16);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/events/${id}`
      );
      setEvents(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [commentAdded, id]);
  useEffect(() => {
    const fetchData = async () => {
      setIsRecentLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/events/recent`
      );
      setRecentEvents(res.data);
      setIsRecentLoading(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/events/${id}`, {
        views: events.views + 1,
      });
    };
    if (events.views) {
      // Ensure events data is loaded before trying to update views
      fetchData();
    }
  }, [id, events.views]);

  const addComment = async (e) => {
    e.preventDefault();
    try {
      setIsCommentLoading(true);
      await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/events/${id}/comments`,
        {
          username,
          text,
        }
      );
      setCommentAdded(!commentAdded);
      setIsCommentLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 text-gray-900 text-sm mb-5 bg-[#f95f06b7] lg:px-20 px-10 py-5">
        <HomeOutlined fontSize="small" /> <p>| Events</p>{" "}
        <p>| {events.title}</p>
      </div>
      <div className="lg:px-20 px-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="mt-20">
              <p className="bg-[#EFE9FE] px-3 py-1 rounded-full text-sm inline-block mb-5">
                event
              </p>
              <h1 className="md:text-7xl sm:text-5xl text-2xl font-semibold text-gray-950 mb-5">
                {events.title}
              </h1>
              <div className="flex gap-3 text-gray-800 mb-14">
                <p className="border-r pr-3">{date}</p>
                <p>{events.comments?.length || 0} Comments</p>
              </div>
            </div>
            <div className="w-full">
              <img src={events.img} alt="" className="w-full rounded-xl" />
            </div>
          </div>
        )}

        <div className="mt-14 flex flex-col md:flex-row gap-20">
          <div className={`${isLoading && "md:w-[3200px]"}`}>
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <div
                  className="mb-10 sm:text-lg text-main ql-editor"
                  dangerouslySetInnerHTML={{ __html: events.description }}
                ></div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {events.comments?.length || 0} Comments
                  </p>
                  <div>
                    {events.comments?.map((item) => {
                      let date = new Date(item.createdAt)
                        .toString()
                        .slice(0, 16);
                      return (
                        <div
                          className="flex gap-4 border-b py-8"
                          key={item._id}
                        >
                          <div>
                            <img src="/user.png" alt="" className="w-[65px]" />
                          </div>
                          <div>
                            <div className="mb-4">
                              <p className="text-lg font-semibold text-gray-900">
                                {item.username}
                              </p>
                              <p className="text-sm text-gray-600">{date}</p>
                            </div>
                            <div>
                              <p className="text-gray-700">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-20">
                    <p className="text-3xl font-bold text-gray-900 ">
                      Leave a Reply
                    </p>
                    <form className="mt-10" onSubmit={addComment}>
                      <div className="w-full mb-3">
                        <p className="text-main text-sm font-semibold mb-2">
                          Your Name
                        </p>
                        <input
                          onChange={(e) => setUsername(e.target.value)}
                          type="text"
                          required
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
                          required
                          onChange={(e) => setText(e.target.value)}
                          rows={6}
                          className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4"
                        ></textarea>
                      </div>
                      <button className="px-16 rounded-lg shadow-md py-4 bg-[#F96106] text-white font-semibold mb-5">
                        {isCommentLoading ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="md:w-[110rem] w-full text-main sticky top-28">
            <div className="">
              <p className="text-[22px] font-semibold">Recent Events</p>
              {isRecentLoading ? (
                <p className="text-center text-gray-500 py-36 text-sm">
                  Loading...
                </p>
              ) : (
                <div>
                  {recentEvents.map((item, index) => {
                    let date = new Date(item.createdAt).toString().slice(0, 16);
                    return (
                      <Link to={`/events/${item._id}`} key={index}>
                        <div className="py-3 border-b">
                          {/* <p className="bg-[#DFF9F0] px-3 py-1 inline-block rounded-lg text-sm mb-3">
                          Event
                        </p> */}
                          <p className="text-lg font-semibold mb-3 hover:text-primary">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-600">{date}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetailPage;
