import React from "react";

const Button = ({ Url, lable }) => {
  return (
    <button className="bg-red-500 px-6  rounded-[250px] text-white flex items-center border-coral-red">
      {lable}
      <img className="rounded-full my-2 p-2" src={Url} alt="logo" />
    </button>
  );
};

export default Button;
