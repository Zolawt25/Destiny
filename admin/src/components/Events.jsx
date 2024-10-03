import axios from "axios";
import React, { useState } from "react";

const Events = (item) => {
  const [btnLoading, setBtnLoading] = useState(false);
  let date = new Date(item.createdAt).toString().slice(0, 16);

  const deleteBlog = async (id) => {
    setBtnLoading(true);
    const res = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/events/${id}`
    );
    item.setDeleted((pre) => !pre);
    setBtnLoading(false);
    return res;
  };

  return (
    <tr className="text-center">
      <td className="flex justify-center">
        <img src={item.img} alt="" className="w-[80px] my-1 rounded" />
      </td>
      <td>{item.title}</td>
      <td>{date}</td>
      <td>{item.views}</td>
      <td>
        <a
          href={`/edit-event/${item._id}`}
          className="bg-[#ffa216] px-6 py-1 uppercase text-sm text-gray-50 rounded mr-2 mb-1"
        >
          edit
        </a>
        <button
          className="bg-red-600 px-6 py-1 uppercase text-sm text-gray-50 rounded"
          onClick={() => !btnLoading && deleteBlog(item._id)}
        >
          {btnLoading ? "deleting..." : "delete"}
        </button>
      </td>
    </tr>
  );
};

export default Events;
