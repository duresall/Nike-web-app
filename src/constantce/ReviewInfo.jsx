import React from "react";
import { star } from "../assets/icons";

const ReviewInfo = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full w-[120px] h-[120px]"
      />

      <p className="text-lg font-montserrat text-gray-500 info-text m-auto max-w-lg text-center mt-5">
        {feedback}
      </p>
      <div className="flex py-3 gap-2">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="text-xl font-montserrat text-slate-gray"> ({rating})</p>
      </div>
      <h3 className="text-3xl font-palanquin font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewInfo;
