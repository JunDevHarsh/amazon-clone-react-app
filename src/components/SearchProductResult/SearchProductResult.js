import React from "react";
import ProductSearchSideabr from "../ProductSearchSidebar/ProductSearchSideabr";
import Products from "../APIs/ProductsList.json";
import RatingStar from "./RatingStar";

function SearchProductResult() {
  return (
    <div className="flex items-start w-full">
      <ProductSearchSideabr />
      <div className="flex flex-col items-start p-4 bg-white w-full">
        <div className="flex flex-row items-center">
          <p className="font-semibold text-lg tracking-wider uppercase">
            Results
          </p>
        </div>
        <div className="flex flex-row items-center rounded-sm shadow-[0_0_1px_1px_#d9d9d9] bg-white">
          <div className="max-w-[15rem] shadow-[1px_0_1px_0_#d9d9d9] cursor-pointer">
            <img className="w-full" src={Products.computer[0].image} alt="" />
          </div>
          <div className="flex flex-col items-start gap-2 p-4">
            <h3 className="font-medium text-lg tracking-wider cursor-pointer hover:text-amazon-orange">
              {Products.computer[0].title}
            </h3>
            <RatingStar ratings={Products.computer[0].ratings} />
            <div className="flex items-end gap-2">
              <span className="text-lg tracking-wider text-amazon-dark-red font-semibold">
                {`₹ ${Products.computer[0].price}`}
              </span>
              <span className="text-sm tracking-wide text-gray-600 line-through">
                {`₹ ${Products.computer[0].actual_price}`}
              </span>
              <span className="text-sm tracking-wide">
                {`( ${Products.computer[0].discount}% off )`}
              </span>
            </div>
            <p className="text-sm tracking-wide">{`${Products.computer[0].delivery.type} Delivery by ${Products.computer[0].delivery.delivery_by}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchProductResult;
