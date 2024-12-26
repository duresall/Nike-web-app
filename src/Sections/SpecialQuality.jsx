import React from "react";

import ViewButton from "../constantce/ViewButton";
import { shoe8 } from "../assets/images";

const SpecialQuality = () => {
  return (
    <section className="flex">
      <div className=" xl:w-2/5
       flex flex-col justify-center
       items-start w-full
        max-xl:padding-x ">
        <h3 className="text-4xl font-bold leading-normal mb-2">
          We provide you <span className="text-red-400">Super</span>
        </h3>
        <h3 className="text-4xl font-bold mb-6">
          <span className="text-red-400">Quality</span> Shoes
        </h3>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veritatis quo omnis, quas facere corrupti deserunt 
          ipsa eveniet, est itaque quam dolor voluptates ea, 
          adipisci sint impedit tempora aliquam nisi.</p>
          <p className="text-gray-500 mb-5">Nihil veritatis quo omnis, quas facere corrupti deserunt 
          ipsa eveniet, est itaque quam</p>
          <ViewButton lable="View details" />
      </div>

      <div className="bg-cover bg-center flex flex-1 justify-center items-center">
       <img src={shoe8} alt="" width={570} height={522} className="object-contain" />
      </div>

    </section>
  );
};

export default SpecialQuality;
