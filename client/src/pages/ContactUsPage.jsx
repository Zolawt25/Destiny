import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneInTalkOutlined,
} from "@mui/icons-material";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <div className="py-20 text-center bg-[#F2F7FD]">
        <h1 className="text-6xl font-bold text-main mb-2">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          We are here to answer any question you may have.
        </p>
      </div>

      <div className="flex justify-center mt-20 flex-col items-center">
        <p className="w-2/3 text-3xl text-main font-semibold mb-7">
          Send a Message 👍🏻
        </p>
        <form className="w-2/3">
          <div className="flex gap-4">
            <div className="w-full mb-3">
              <p className="text-main text-sm font-semibold mb-2">Your Name</p>
              <input
                type="text"
                className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4 bg-transparent"
              />
            </div>
            <div className="w-full mb-3">
              <p className="text-main text-sm font-semibold mb-2">Your Email</p>
              <input
                type="text"
                className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4 bg-transparent"
              />
            </div>
          </div>
          <div className="w-full mb-3">
            <p className="text-main text-sm font-semibold mb-2">Subject</p>
            <input
              type="text"
              className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4 bg-transparent"
            />
          </div>
          <div className="mb-3">
            <p className="text-main text-sm font-semibold mb-2">Your message</p>
            <textarea
              name=""
              id=""
              rows={6}
              className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg w-full px-4 py-4"
            ></textarea>
          </div>
          <button className="px-16 rounded-lg shadow-md py-4 bg-primary text-white font-semibold mb-5">
            Send Message
          </button>
        </form>
      </div>
      <div className="px-20 my-20">
        <p className="text-2xl text-main text-center font-semibold mb-10">
          Let us know how we can help
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="w-[320px] p-6 border shadow-[0_0_2px_1px_#1111_inset] rounded-lg">
            <div className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg p-2 inline-block text-gray-600">
              <EmailOutlined />
            </div>
            <div className="mt-6 text-main">
              <p className="text-xl font-semibold">Feedbacks</p>
              <p className="py-2 text-sm text-gray-600">
                Speak to our Friendly team.
              </p>
              <p className="lg font-semibold">Support@gmail.com</p>
            </div>
          </div>
          <div className="w-[320px] p-6 border shadow-[0_0_2px_1px_#1111_inset] rounded-lg">
            <div className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg p-2 inline-block text-gray-600">
              <PhoneInTalkOutlined />
            </div>
            <div className="mt-6 text-main">
              <p className="text-xl font-semibold">Call Us</p>
              <p className="py-2 text-sm text-gray-600">
                Mon-Fri from 8am to 5pm
              </p>
              <p className="lg font-semibold">+1(555) 000-0000</p>
            </div>
          </div>
          <div className="w-[320px] p-6 border shadow-[0_0_2px_1px_#1111_inset] rounded-lg">
            <div className="border shadow-[0_0_2px_1px_#1111_inset] rounded-lg p-2 inline-block text-gray-600">
              <LocationOnOutlined />
            </div>
            <div className="mt-6 text-main">
              <p className="text-xl font-semibold">Visit Us</p>
              <p className="py-2 text-sm text-gray-600">Visit our office HQ.</p>
              <p className="lg font-semibold">77 Robinson Road #33-01</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
