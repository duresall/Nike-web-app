import React from "react";

const ViewButton = ({ Url, lable }) => {
  return (
    <button className="bg-red-500 px-6  rounded-[250px] text-white flex items-center border-coral-red p-3">
      {lable}
     
    </button>
  );
};

export default ViewButton;
