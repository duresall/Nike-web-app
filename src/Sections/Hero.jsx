import React, { useState } from "react";
import Button from "../constantce/Button";
import { arrowRight } from "../assets/icons/index";
import { statistics, shoes } from "../constantce";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../constantce/ShoeCard";
import '../index.css'

const Hero = () => {
  const [bigshoeImage, setbigshoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col
       justify-center min-h-screen max-container"
    >
      <div
        className="relative xl:w-2/5
       flex flex-col justify-center
       items-start w-full
        max-xl:padding-x pt-28 pl-8"
      >
        <p className="text-xl font-montserrat text-red-300">
          Our summer products
        </p>
        <h1 className="text-paliquen font-sans text-[80px] mt-20 max-sm:text-[65px] max-sm:leading-[82px] font-bold  ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-500 inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          the life i lived kindda ruined the life i want to live, teach this
          bold nigga a lession
        </p>
        <Button Url={arrowRight} lable="Shop now" />
        <div className="flex justify-start items-start flex-wrap w-full mt-16 mb:10 gap-10 bg-red">
          {statistics.map((items, index) => (
            <div className="flex flex-col   " key={index}>
              <p className="text-3xl font-mono lg:text-4xl">{items.value}</p>
              <p className="text-1xl lg:text-3xl">{items.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center  xl:py-40 bg-primary bg-hero bg-cover beg-center bg-gray-300 ">
        <img
          src={bigshoeImage}
          alt=""
          width={501}
          height={400}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[6%] sm:left-[10%] px-6 z-10">
          {shoes.map((shoe, index) => (
            <div key={index} className="flex-shrink-0">
            
              <ShoeCard
                imgUrl={shoe.bigShoe}
                changeBigshoeImage={(shoe) => setbigshoeImage(shoe)}
                bigshoeImage={bigshoeImage}
                className="w-30 sm:w-60" // Adjust sizes here
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
