import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-2xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-red-400 rounded-full">
        <img src={imgURL} alt="" />
      </div>
      <h3 className="text-2xl font-bold mt-6">{label}</h3>
      <p className="text-lg mt-2 text-gray-500 break-words">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
