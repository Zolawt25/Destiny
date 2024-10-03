import React, { useEffect, useState } from "react";
// import { events } from "../assets/events";
import axios from "axios";
import Events from "../components/Events";
// import { useLocation } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events`);
      setEvents(res.data);
      setLoading(false);
    };
    fetchData();
  }, [deleted]);

  return (
    <div className="">
      <div className="py-10 px-5">
        <h1 className="text-center uppercase text-3xl font-bold text-[#070b22] mb-4">
          Event dashboard
        </h1>
        <div className="bg-white shadow-md">
          <p className="capitalize bg-[#070b22] py-1 px-3 text-gray-100 text-sm">
            manage event posts
          </p>
          <div className="px-3 py-3 ">
            <a
              href="/add-event"
              className="bg-[#ffa216] px-3 py-1 uppercase text-sm text-gray-50"
            >
              create new events post
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
                    events.map((item, index) => {
                      return (
                        <Events key={index} {...item} setDeleted={setDeleted} />
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

export default EventsPage;
