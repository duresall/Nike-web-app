import React from "react";

const CustomButton = ({ text, bgColor, color, border }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        bgColor ? "bg-red-400" : "bg-transparent"
      } rounded-full border-2 ${
        border ? "border-gray-500" : "border-transparent"
      }  `}
    >
      <button className={`${color} rounded-full px-5 py-2`}>{text}</button>
    </div>
  );
};

export default CustomButton;
