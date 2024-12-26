import React from "react";
import { reviews } from "../constantce";
import ReviewInfo from "../constantce/ReviewInfo";

const CustomerReivew = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-palanquin font-bold mb-5">
          What Our <span className="text-red-400">Customer</span> Say?
        </h1>
        <p className="text-lg font-montserrat text-gray-500 info-text m-auto max-w-lg text-center">
          Hear from our satisfied customers who have experienced the quality and
          craftsmanship of our products.
        </p>
        <div className="flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
          {reviews.map((review, index) => (
            <ReviewInfo key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReivew;
