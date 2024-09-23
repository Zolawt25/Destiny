import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <div className="py-20 text-center bg-[#f95f06b7] px-4">
        <h1 className="sm:text-6xl text-4xl font-bold text-main mb-2">
          About our classes
        </h1>
        <p className="sm:text-xl text-lg text-gray-600">
          We providing the best quality online courses.
        </p>
      </div>
      <div className="lg:px-20 px-10 my-20">
        <div className="flex flex-col md:flex-row gap-7 items-center mb-14">
          <div className="flex-[2]">
            <p className="text-2xl font-semibold text-main mb-2">
              WHAT MAKES US DIFFERENT?
            </p>
            <p className="text-sm">
              At our school, we are proud to stand out from the crowd. We
              believe that what sets us apart is our unwavering commitment to
              integrity, leadership, success, and learning – four key pillars
              that underpin everything we do. Integrity is at the heart of our
              school culture. We believe in doing the right thing, even when no
              one is watching. We foster a culture of honesty, transparency, and
              accountability, and hold ourselves to the highest ethical
              standards. By living our values and leading by example, we instill
              in our students a strong sense of integrity that will serve them
              well in all areas of their lives.
            </p>
          </div>
          <div className="flex-[1.2]">
            <img
              src="/aboutus/aboutus-1.jpg"
              alt=""
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center mb-14 md:flex-row-reverse">
          <div className="flex-[2]">
            <p className="text-2xl font-semibold text-main mb-2 uppercase">
              Our Vision Statement
            </p>
            <p className="text-sm">
              To serve the local and international community by offering a high
              quality 21st century learning experience that promotes educational
              achievement and ethical endeavor; providing Ethiopia with its next
              generation of entrepreneurs, inventors, creators, physicists,
              chemists, engineers and scholars.
            </p>
          </div>
          <div className="flex-[1.2]">
            <img
              src="/aboutus/aboutus-2.jpg"
              alt=""
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-7 items-center mb-14">
          <div className="flex-[2]">
            <p className="text-2xl font-semibold text-main mb-2">
              Our Mission Statement
            </p>
            <p className="text-sm">
              To be recognized as a premium school in Ethiopia. To be a
              learning-centered educational institution providing world-class
              education opportunities to Ethiopian and expatriate students that
              meet international standards whilst, at the same time, celebrating
              local culture, values and traditions. To provide the Ethiopia with
              well-qualified, global citizens, equipped with 21st century
              skills, ready to make a positive contribution to a modern
              knowledge economy
            </p>
          </div>
          <div className="flex-[1.2]">
            <img
              src="/aboutus/aboutus-3.jpg"
              alt=""
              className="rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
