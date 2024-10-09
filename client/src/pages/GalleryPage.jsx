import { HomeOutlined } from "@mui/icons-material";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const GalleryPage = () => {
  const imgs = [
    "/pics/gallery-1.jpg",
    "/pics/gallery-2.jpg",
    "/pics/gallery-3.jpg",
    "/pics/gallery-4.jpg",
    "/pics/gallery-8.jpg",
    "/pics/gallery-5.jpg",
    "/pics/gallery-7.jpg",
    "/pics/gallery-6.jpg",
  ];
  return (
    <div>
      <div className=" bg-[#f95f06b7] md:px-20 px-10 py-16">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <HomeOutlined fontSize="small" /> <p>| Our Gallery</p>
        </div>
        <h2 className="text-main sm:text-6xl text-4xl font-bold">
          Our Gallery
        </h2>
      </div>
      <div className="mt-20 mb-20">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry className=" md:px-20 px-10">
            {imgs.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=""
                  key={index}
                  className="my-1 mx-1 rounded-lg"
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default GalleryPage;
