import { HomeOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const DonationsDetailPage = () => {
  const [donations, setDonations] = useState({});
  const [recentDonations, setRecentDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecentLoading, setIsRecentLoading] = useState(false);
  let date = new Date(donations.createdAt).toString().slice(0, 16);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/donations/${id}`
      );
      setDonations(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchRecentDonations = async () => {
      setIsRecentLoading(true);
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/donations/recent`
      );
      setRecentDonations(res.data);
      setIsRecentLoading(false);
    };
    fetchRecentDonations();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/donations/${id}`, {
        views: donations.views + 1,
      });
    };
    if (donations.views) {
      // Ensure donations data is loaded before trying to update views
      fetchData();
    }
  }, [id, donations.views]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 text-gray-900 text-sm mb-5 bg-[#f95f06b7] lg:px-20 px-10 py-5">
        <HomeOutlined fontSize="small" /> <p>| donations</p>{" "}
        <p>| {donations.title}</p>
      </div>
      <div className="lg:px-20 px-10">
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="mt-20">
              <p className="bg-[#EFE9FE] px-3 py-1 rounded-full text-sm inline-block mb-5">
                {donations.category}
              </p>
              <h1 className="md:text-7xl sm:text-5xl text-2xl font-semibold text-gray-950 mb-5">
                {donations.title}
              </h1>
              <div className="flex gap-3 text-gray-800 mb-14">
                <p className="">{date}</p>
              </div>
            </div>
            <div className="w-full">
              <img src={donations.img} alt="" className="w-full rounded-xl" />
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
                  dangerouslySetInnerHTML={{ __html: donations.description }}
                ></div>
                <a
                  href={donations.donationLink}
                  target="_blank"
                  className=" sticky top-0 px-16 rounded-lg shadow-md py-4 bg-[#F96106] text-white font-semibold mb-5"
                >
                  Donate Now
                </a>
              </div>
            )}
          </div>
          <div className="md:w-[110rem] w-full text-main sticky top-28">
            <div className="mb-5">
              <p className="text-[22px] font-semibold">Recent donations</p>
              {isRecentLoading ? (
                <p className="text-center text-gray-500 py-36 text-sm">
                  Loading...
                </p>
              ) : (
                <div>
                  {recentDonations.map((item, index) => {
                    let date = new Date(item.createdAt).toString().slice(0, 16);
                    return (
                      <Link to={`/donations/${item._id}`} key={index}>
                        <div className="py-3 border-b">
                          <p className="bg-[#DFF9F0] px-3 py-1 inline-block rounded-lg text-sm mb-3">
                            {item.category}
                          </p>
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

export default DonationsDetailPage;
