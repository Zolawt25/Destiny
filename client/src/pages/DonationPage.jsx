import { HomeOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import OngoingProjects from "../components/OngoingProjects";
import OneTimeProjects from "../components/OneTimeProjects";
import PriorityRequest from "../components/PriorityRequest";
import Loading from "../components/Loading";

const DonationPage = () => {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/donations`
      );
      setDonations(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <HomeOutlined fontSize="small" /> <p>| Donations</p>
        </div>
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          Ongoing Projects
        </h2>
      </div>
      <div className="mt-20">
        {isLoading ? <Loading /> : <OngoingProjects donations={donations} />}
      </div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16 my-16">
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          One-Time Projects
        </h2>
      </div>
      <div className="mt-20">
        {isLoading ? <Loading /> : <OneTimeProjects donations={donations} />}
      </div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16 my-16">
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          Priority Request
        </h2>
      </div>
      <div className="my-20">
        {isLoading ? <Loading /> : <PriorityRequest donations={donations} />}
      </div>
    </div>
  );
};

export default DonationPage;
