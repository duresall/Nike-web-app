import React from "react";
import ProductsCard from "../constantce/ProductsCard";
import { products } from "../constantce";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <section id="products" className="mt-14 leading-normal">
      <div className="flex flex-col">
        <h2 className="text-4xl font-semibold mb-6">
          Our <span className="text-red-400">proudcts</span> and more
        </h2>
        <p className="text-gray-500 mx-lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quam asperiores quibusdam consectetur? Iste dicta esse, nisi suscipit
          soluta modi possimus incidunt cum quia rerum quos nam natus similique
          nostrum!
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 sm:gap-4 gap-10">
        {products.map((product) => {
          return (
            <div className="flex flex-1 flex-col w-full max-sm:w-full ">
              <img src={product.imgURL} alt={product.name} width={200} />

              <div className="flex mt-4">
                <img src={star} alt="rating" width={20} height={20} />
                <p className="mx-2 text-gray-500">(4.5)</p>
              </div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-red-400">{product.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularProducts;
