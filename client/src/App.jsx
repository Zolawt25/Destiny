import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NewsAndEventsPage from "./pages/NewsAndEventsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import DonationPage from "./pages/DonationPage";
import EventsDetailPage from "./pages/EventsDetailPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import DonationsDetailPage from "./pages/DonationsDetailPage";
import CommunityPage from "./pages/CommunityPage";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1500px] mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/events/:id" element={<EventsDetailPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/donations/:id" element={<DonationsDetailPage />} />
          <Route path="/news" element={<NewsAndEventsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
