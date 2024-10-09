import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogsPage";
import EventPage from "./pages/EventsPage";
import NewsPage from "./pages/NewsPage";
import AddBlogPage from "./pages/AddBlogPage";
import AddEventPage from "./pages/AddEventPage";
import AddNewsPage from "./pages/AddNewsPage";
import EditBlogPage from "./pages/EditBlogPage";
import EditEventPage from "./pages/EditEventPage";
import EditNewsPage from "./pages/EditNewsPage";
import DonationsPage from "./pages/DonationsPage";
import AddDonationsPage from "./pages/AddDonationsPage";
import EditDonationPage from "./pages/EditDonationPage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const locationName = useLocation().pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <SideBar isOpen={isOpen} />
      <div className="flex-grow bg-[#F0F2FF] px-8">
        <Routes>
          {sessionStorage.getItem("user_token") && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<BlogPage />} />
              <Route path="/events" element={<EventPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/donations" element={<DonationsPage />} />
              <Route path="/add-blog" element={<AddBlogPage />} />
              <Route path="/edit-blog/:id" element={<EditBlogPage />} />
              <Route path="/add-event" element={<AddEventPage />} />
              <Route path="/edit-event/:id" element={<EditEventPage />} />
              <Route path="/add-news" element={<AddNewsPage />} />
              <Route path="/edit-news/:id" element={<EditNewsPage />} />
              <Route path="/add-donations" element={<AddDonationsPage />} />
              <Route
                path="/edit-donations/:id"
                element={<EditDonationPage />}
              />
            </>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          {/* Catch-all route that redirects to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <button
        className={`fixed top-4 left-5 rotate-90 font-semibold ${
          !isOpen ? "text-gray-50" : "text-[#121e2d]"
        } lg:hidden z-50 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        |||
      </button>
    </div>
  );
};

export default App;
