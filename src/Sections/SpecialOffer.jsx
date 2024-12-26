import React from "react";

import { offer } from "../assets/images";
import Button from "../constantce/Button";
import CustomButton from "../constantce/CustomButton";

const SpecialOffer = () => {
  return (
    <section
      id="specialOffer"
      className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt=""
          className="object-contain w-full"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-4xl font-bold ">
          <span className="text-red-400">Special</span> Offer
        </h2>

        <p className="text-gray-500 mt-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          perspiciatis voluptates excepturi. Minima tempore illum obcaecati iure
          vitae facere necessitatibus! Amet alias nisi atque repudiandae quos
          numquam eum labore id.
        </p>
        <p className="text-gray-500 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          perspiciatis voluptates excepturi. Minima tempore illum obcaecati iure
          vitae facere necessitatibus! Amet alias nisi atque repudiandae quos
          numquam eum labore id.
        </p>
        <div className="mt-10 flex gap-5">
          <CustomButton
            text="Shop Now"
            bgColor={true}
            color={"text-white"}
            border={false}
          />
          <CustomButton
            text="Learn more"
            bgColor={false}
            color={"text-gray-500"}
            border={true}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
