import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonials() {
  const swiperRef = React.useRef(null);

  const handleClick = (index) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const activeIndex = swiper.activeIndex;

      if (index > activeIndex) {
        swiper.slideNext();
      } else if (index < activeIndex) {
        swiper.slidePrev();
      }
    }
  };

  const slides = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium.",
      image: "/user.png",
      name: "Eyosias",
      title: "Parent",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium.",
      image: "/user.png",
      name: "Yibeltal",
      title: "Teacher",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium.",
      image: "/user.png",
      name: "Sisay",
      title: "Parent",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 0 });
  }, []);

  return (
    <div className="animation" data-aos="zoom-in">
      <h1 className="mb-6 text-2xl text-center text-main">Testimonials</h1>
      <h1 className="px-2 text-4xl text-center sm:text-5xl md:text-6xl mb-14 font-semibold text-main">
        What Our Clients Say
      </h1>
      <div className="">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper overflow-visible"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleClick(index)}
              className="swiper-slide bg-cover bg-center w-[300px] bg-blue-50 shadow-md rounded-lg p-5 text-[#01041d]  pb-10"
            >
              <i className="font-light text-[#374e81]">{slide?.quote}</i>
              <div className="flex items-center mt-4 gap-7">
                <img
                  src={slide?.image}
                  alt={slide?.name}
                  className="testimonial-img w-[40%] rounded-full pt-4 pb-4"
                />
                <div>
                  <h2 className="font-bold">{slide?.name}</h2>
                  <p className="font-light text-[#0a3083] text-[0.9rem]">
                    {slide?.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
