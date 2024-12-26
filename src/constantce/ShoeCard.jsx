import React from "react";
import '../app.css'
const ShoeCard = ({ imgUrl, changeBigshoeImage, bigshoeImage }) => {
  const handleClick = () => {
    if (bigshoeImage !== imgUrl) {
      changeBigshoeImage(imgUrl);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${
      bigshoeImage === imgUrl ? "border-red-400" : "border-transparent"
    } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-cover bg-card bg-center sm:w-40 sm:h-40 rounded max-sm:p-4 ">
       
        <img
          src={imgUrl}
          width={127}
          height={103}
          alt="shoe collection"
          className="object-contain max-sm:w-20 max-md:w-24"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
