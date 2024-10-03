import React, { useEffect } from "react";
import Accordion from "./Accordion";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 0 });
  }, []);

  return (
    <div className=" overflow-hidden">
      <h1 className="mt-10 text-3xl font-bold text-main">
        Frequently Asked Questions
      </h1>
      <div className="items-center block max-w-screen-xl p-3 mx-auto rounded-lg md:flex mb-28 ">
        <div
          className=" text-sm sm:text-[14px] py-3 rounded-lg animation"
          data-aos="fade-left"
        >
          <Accordion
            title="How do I enroll my child in the school?"
            answer="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium delectus eius dolorem corporis, neque tenetur at, id accusamus dicta porro. Iusto debitis accusamus ipsa quidem est vero eaque sequi error voluptate doloremque doloribus, ex ullam hic recusandae voluptates ab odit. Vitae.
"
          />
          <Accordion
            title="What are the admission requirements?"
            answer="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium delectus eius dolorem corporis, neque tenetur at, id accusamus dicta porro. Iusto debitis accusamus ipsa quidem est vero eaque sequi error voluptate doloremque doloribus, ex ullam hic recusandae voluptates ab odit. Vitae.
"
          />
          <Accordion
            title="What is the age cutoff for kindergarten?"
            answer="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium delectus eius dolorem corporis, neque tenetur at, id accusamus dicta porro. Iusto debitis accusamus ipsa quidem est vero eaque sequi error voluptate doloremque doloribus, ex ullam hic recusandae voluptates ab odit. Vitae.
"
          />
          <Accordion
            title="Are there any tuition fees or financial aid options available?"
            answer="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore sapiente expedita corrupti, at praesentium assumenda rerum suscipit neque autem! Et fuga maiores molestiae est error labore accusantium delectus eius dolorem corporis, neque tenetur at, id accusamus dicta porro. Iusto debitis accusamus ipsa quidem est vero eaque sequi error voluptate doloremque doloribus, ex ullam hic recusandae voluptates ab odit. Vitae.
"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
