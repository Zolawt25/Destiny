import React from "react";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";

const CommunityPage = () => {
  return (
    <div>
      <div className="sm:px-20 px-7 mt-10">
        <div className="relative rounded-xl overflow-hidden">
          <div>
            <img src="/community.jpg" alt="" className=" aspect-[18/9]" />
          </div>
          <div className="absolute top-0 md:p-10 p-3 flex h-full items-end justify-center text-center w-full bg-[#00000045]">
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-lg text-white font-bold pb-10">
              Community Service
            </h2>
          </div>
        </div>
      </div>
      <div className="sm:px-20 px-7">
        <div className=" mt-14">
          <h1 className="text-4xl font-bold text-main mb-5">
            The Power of Serving Others
          </h1>
          <p className="text-sm text-gray-800">
            While community service is not a requirement at Canterbury, the vast
            majority of students choose to participate, often alongside our
            faculty. You can volunteer in food banks, nursing homes, social
            service agencies, and animal shelters or work with disadvantaged
            families, students in local schools, and athletes in the Special
            Olympics. You can also take part in two exceptional experiences
            abroad—one in Nicaragua, where you work on projects designed to help
            break the cycle of poverty, and another in Lourdes, France, where
            you assist the visiting sick in completing their pilgrimage to the
            Marian shrine.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-main text-center mb-20 font-semibold">
            Our Scholarship Students
          </h2>
          <div className="flex flex-col md:flex-row gap-7 mb-14">
            <div className="flex-[2]">
              <div className=" sticky top-24">
                <p className="text-2xl font-semibold text-main mb-2 uppercase">
                  Our Scholarship Students
                </p>
                <p className="text-sm">
                  At our school, we are proud to stand out from the crowd. We
                  believe that what sets us apart is our unwavering commitment
                  to integrity, leadership, success, and learning – four key
                  pillars that underpin everything we do. Integrity is at the
                  heart of our school culture. We believe in doing the right
                  thing, even when no one is watching. We foster a culture of
                  honesty, transparency, and accountability, and hold ourselves
                  to the highest ethical standards. By living our values and
                  leading by example, we instill in our students a strong sense
                  of integrity that will serve them well in all areas of their
                  lives.
                </p>
              </div>
            </div>
            <div className="flex-[1.2]">
              <img src="/scolar1.jpg" alt="" className="rounded-lg shadow-sm" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-7 mb-14">
            <div className="flex-[2]">
              <div className=" sticky top-24">
                <p className="text-2xl font-semibold text-main mb-2 uppercase">
                  Our Scholarship Students
                </p>
                <p className="text-sm">
                  At our school, we are proud to stand out from the crowd. We
                  believe that what sets us apart is our unwavering commitment
                  to integrity, leadership, success, and learning – four key
                  pillars that underpin everything we do. Integrity is at the
                  heart of our school culture. We believe in doing the right
                  thing, even when no one is watching. We foster a culture of
                  honesty, transparency, and accountability, and hold ourselves
                  to the highest ethical standards. By living our values and
                  leading by example, we instill in our students a strong sense
                  of integrity that will serve them well in all areas of their
                  lives.
                </p>
              </div>
            </div>
            <div className="flex-[1.2]">
              <img src="/scolar2.jpg" alt="" className="rounded-lg shadow-sm" />
            </div>
          </div>
        </div>

        <div>
          <FAQ />
        </div>
        <div className="mb-10 overflow-hidden pb-10">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
