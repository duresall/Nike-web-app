import React from "react";
import CustomButton from "../constantce/CustomButton";

const Subscription = () => {
  return (
    <section className="padding-x py-10">
      <div className="flex max-lg:flex-col justify-between items-center gap-10">
        <div className="flex flex-col">
          <h1 className="text-4xl font-palanquin font-bold mb-2">
            Sign Up for <span className="text-red-400">updates</span>
          </h1>
          <h1 className="text-4xl font-palanquin font-bold">& Newsletter</h1>
        </div>

        <form className="relative w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 rounded-full px-6 pr-32 border-2 border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-red-400 text-white px-4 h-9 rounded-full hover:bg-red-500 text-sm transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
