import React from "react";
import { bigShoe1 } from "../assets/images";

const ProductsCard = ({ imgURL, name, price }) => {
    console.log(name)
  return (
    
    <div className="flex flex-1 justify-center items-center flex-col w-full max-sm:w-full ">
      <div className=" bg-card bg-center bg-cover bg-hero rounded-2xl p-4">
        <img src={imgURL} alt={name} width={200} />
        
      </div>
      somethig
    </div>
  );
};

export default ProductsCard;
