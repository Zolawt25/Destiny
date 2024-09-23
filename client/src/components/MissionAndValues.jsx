import React from "react";

const MissionAndValues = () => {
  return (
    <div className="bg-[#F3F4F8]">
      <div className="pt-28 lg:px-20 px-10 flex flex-col lg:flex-row">
        <div className=" flex-1 ">
          <img src="/studying.png" alt="studying" className="sticky top-28" />
        </div>
        <div className="flex-[1.8]">
          <div className="mb-10">
            <h2 className="text-5xl font-semibold text-gray-900 mb-5 mt-4 lg:mt-0">
              Mission and values
            </h2>
            <p className="sm:text-lg text-[15px] text-gray-700">
              We prepare you to launch your career by providing a supportive,
              creative, and professional. Our mission is to prepare students to
              understand, contribute to, and succeed in a rapidly changing
              society,
            </p>
          </div>
          <div className="bg-white flex items-center rounded-md p-1 shadow mb-5 py-4 md:py-0">
            <div className="md:px-10 px-5">
              <h3 className="text-3xl text-gray-950 font-semibold mb-5">
                Creativity
              </h3>
              <p className="sm:text-lg text-[15px] text-gray-700 mb-10">
                Encouraging behaviours which encompass notions of originality,
                and problem-solving in all that we do.
              </p>
              <a
                href="/"
                className="px-8 py-2 bg-[#F96106] text-white font-semibold hover:bg-[#5169F1] rounded"
              >
                Learn More
              </a>
            </div>
            <div className="rounded-full overflow-hidden">
              <img
                src="/painting.jpg"
                alt=""
                className="w-[900px] hidden md:block"
              />
            </div>
          </div>
          <div className="bg-white flex items-center rounded-md p-1 shadow mb-5 py-4 md:py-0">
            <div className="md:px-10 px-5">
              <h3 className="text-3xl text-gray-950 font-semibold mb-5">
                Scholarship
              </h3>
              <p className="sm:text-lg text-[15px] text-gray-700 mb-10">
                Encouraging behaviours which encompass notions of originality,
                and problem-solving in all that we do.
              </p>
              <a
                href="/"
                className="px-8 py-2 bg-[#F96106] text-white font-semibold hover:bg-[#5169F1] rounded"
              >
                Learn More
              </a>
            </div>
            <div className="rounded-full overflow-hidden">
              <img
                src="/mission-item-2.jpg"
                alt=""
                className="w-[900px] hidden md:block"
              />
            </div>
          </div>
          <div className="bg-white flex items-center rounded-md p-1 shadow mb-5 py-4 md:py-0">
            <div className="md:px-10 px-5">
              <h3 className="text-3xl text-gray-950 font-semibold mb-5">
                Community
              </h3>
              <p className="sm:text-lg text-[15px] text-gray-700 mb-10">
                Encouraging behaviours which encompass notions of originality,
                and problem-solving in all that we do. Learn More
              </p>
              <a
                href="/"
                className="px-8 py-2 bg-[#F96106] text-white font-semibold hover:bg-[#5169F1] rounded"
              >
                Learn More
              </a>
            </div>
            <div className="rounded-full overflow-hidden">
              <img
                src="/mission-item-3.jpg"
                alt=""
                className="w-[900px] hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndValues;
