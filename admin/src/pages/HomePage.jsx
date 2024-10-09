import {
  Event,
  Newspaper,
  RssFeedRounded,
  VolunteerActivism,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement } from "chart.js";
import axios from "axios";

Chartjs.register(Tooltip, Legend, ArcElement);

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/blogs`);
      setBlogs(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/events`);
      setEvents(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/news`);
      setNews(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/donations`
      );
      setDonations(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const options = {};
  const data = {
    labels: ["Blogs", "Events", "News", "Donations"],
    datasets: [
      {
        label: "Total Posts",
        data: [blogs.length, events.length, news.length, donations.length],
        backgroundColor: ["#49BD81", "#3F7AFC", "#FFA001", "#f472b6"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 *:rounded-md *:shadow-sm">
        <div className="flex items-center bg-white py-5 gap-4 justify-center">
          <div className="bg-[#D1F3E0] text-[#49BD81] p-3 rounded-full">
            <RssFeedRounded sx={{ fontSize: "60px" }} />
          </div>
          <div>
            <p className="text-gray-400 text-lg">Blogs Posts</p>
            <p className="text-lg font-semibold">{blogs.length}</p>
          </div>
        </div>
        <div className="flex items-center bg-white py-5 gap-4 justify-center">
          <div className="bg-[#E1F1FF] text-[#3F7AFC] p-3 rounded-full">
            <Event sx={{ fontSize: "60px" }} />
          </div>
          <div>
            <p className="text-gray-400 text-lg">Event Posts</p>
            <p className="text-lg font-semibold">{events.length}</p>
          </div>
        </div>
        <div className="flex items-center bg-white py-5 gap-4 justify-center">
          <div className="bg-[#FFF2D8] text-[#FFA001] p-3 rounded-full">
            <Newspaper sx={{ fontSize: "60px" }} />
          </div>
          <div>
            <p className="text-gray-400 text-lg">News Posts</p>
            <p className="text-lg font-semibold">{news.length}</p>
          </div>
        </div>
        <div className="flex items-center bg-white py-5 gap-4 justify-center">
          <div className="bg-pink-100 text-pink-400 p-3 rounded-full">
            <VolunteerActivism sx={{ fontSize: "60px" }} />
          </div>
          <div>
            <p className="text-gray-400 text-lg">Donation Posts</p>
            <p className="text-lg font-semibold">{donations.length}</p>
          </div>
        </div>
      </div>
      <div className="lg:h-[100vh] w-[100%] flex justify-center mt-8 bg-white rounded-md shadow py-2">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default HomePage;
