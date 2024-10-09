import {
  Event,
  Newspaper,
  PieChart,
  RssFeedRounded,
  VolunteerActivism,
} from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SideBar = ({ isOpen }) => {
  const location = useLocation().pathname.split("/")[1];
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    if (
      location === "login" ||
      location === "forgot-password" ||
      location === `reset-password`
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [location]);
  return (
    <div
      className={`h-screen lg:sticky fixed top-0 duration-300 ease-in-out ${
        isOpen && "-left-[100vw]"
      }  bg-[#121e2d] z-40 ${isDisable && "hidden"}`}
    >
      <div className="w-[250px] pt-10 lg:pt-0">
        <div className="*:flex *:items-center px-4 py-3 *:gap-2 *:text-gray-100 w-full *:w-full hover:*:bg-[#ffffff17] *:py-2 *:px-2 *:text-sm *:rounded-md *:mb-2">
          <a href="/">
            <PieChart fontSize="small" /> Dashboard
          </a>
          <a href="/blogs">
            <RssFeedRounded fontSize="small" /> Blogs
          </a>
          <a href="/events">
            <Event fontSize="small" /> Events
          </a>
          <a href="/news">
            <Newspaper fontSize="small" /> News
          </a>
          <a href="/donations">
            <VolunteerActivism fontSize="small" /> Donations
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
