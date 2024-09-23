import React from "react";
import { events } from "../assets/events";
import { HomeOutlined } from "@mui/icons-material";
import Events from "../components/Events";
import News from "../components/News";

const NewsAndEventsPage = () => {
  return (
    <div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <HomeOutlined fontSize="small" /> <p>| News and Events</p>
        </div>
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          Upcoming Events
        </h2>
      </div>
      <div className="mt-20">
        <Events events={events} />
      </div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16 my-16">
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          School News
        </h2>
      </div>
      <div className="my-10">
        <News events={events} />
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
