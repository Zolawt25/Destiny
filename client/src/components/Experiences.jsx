import React from "react";

const Experiences = () => {
  return (
    <div>
      <div className="mt-24 bg-[#F96106] text-center lg:px-36 md:px-20 py-12 grid lg:grid-cols-4 md:grid-cols-2 *:mb-5">
        <div className=" border-r-2 border-[#b1511a] md:pr-20">
          <h2 className="text-white text-7xl italic font-serif">10k</h2>
          <p className="text-gray-300 mt-2">Students Enrolled</p>
        </div>
        <div className=" lg:border-r-2 border-[#b1511a] lg:pr-20 md:pr-10">
          <h2 className="text-white text-7xl italic font-serif">3k</h2>
          <p className="text-gray-300 mt-2">Enrollment forms</p>
        </div>
        <div className=" border-r-2 border-[#b1511a] lg:pr-20 md:pr-10">
          <h2 className="text-white text-7xl italic font-serif">240</h2>
          <p className="text-gray-300 mt-2">Online Instructors</p>
        </div>
        <div className=" ">
          <h2 className="text-white text-7xl italic font-serif">110</h2>
          <p className="text-gray-300 mt-2">Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
