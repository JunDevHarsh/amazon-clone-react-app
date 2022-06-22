import React from "react";
import CustomerRating from "./CustomerRating";

function ProductSearchSideabr() {
  return (
    <div className="flex flex-col item-start w-60 p-4">
      <div className="flex flex-col item-start">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Delivery Day
        </h3>
        <div className="flex items-center">
          <input type="checkbox" name="deliveryToday" id="deliveryToday" />
          <label
            htmlFor="deliveryToday"
            className="ml-2 font-normal text-sm tracking-wide"
          >
            Get It Today
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="deliveryTomorrow"
            id="deliveryTomorrow"
          />
          <label
            htmlFor="deliveryTomorrow"
            className="ml-2 font-normal text-sm tracking-wide"
          >
            Get It Tomorrow
          </label>
        </div>
      </div>
      <div className="flex flex-col item-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">Department</h3>
        <ul className="flex flex-col items-start">
          <li className="font-normal text-sm tracking-wide hover:text-amazon-orange cursor-pointer">
            Laptops
          </li>
        </ul>
      </div>
      <div className="flex flex-col item-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Customer Review
        </h3>
        <ul className="flex flex-col items-start">
          {[...Array(4)].map((_, index) => (
            <li className="flex items-center cursor-pointer" key={index}>
              <CustomerRating rating={index + 1} />
              <span className="text-sm ml-1 hover:text-amazon-orange">{`& Up`}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">Brand</h3>
        <ul className="flex flex-col cursor-pointer">
          <li className="flex items-center">
            <input type="checkbox" name="lenovo" id="lenovo" />
            <label htmlFor="lenovo" className="hover:text-amazon-orange ml-1">
              Lenovo
            </label>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Price Desktops
        </h3>
        <ul className="flex flex-col items-start">
          {[...Array(5)].map((_, index) => {
            if (index + 1 < 2) {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-amazon-orange cursor-pointer"
                >{`Under ₹20000`}</li>
              );
            } else if (index + 1 < 5) {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-amazon-orange cursor-pointer"
                >{`₹${(index + 1) * 10000} - ₹${(index + 2) * 10000}`}</li>
              );
            } else {
              return (
                <li
                  key={index + 1}
                  className="font-normal text-sm tracking-wider hover:text-amazon-orange cursor-pointer"
                >{`Over ₹50000`}</li>
              );
            }
          })}
          <div className="flex items-center gap-1 mt-2">
            <input
              type="number"
              placeholder="₹Min"
              className="appearance-none px-2 py-1 font-normal text-sm w-16 rounded-md border border-solid border-gray-500 outline-none"
              min={0}
              max={100000}
            />
            <input
              type="number"
              placeholder="₹Max"
              className="appearance-none px-2 py-1 font-normal text-sm w-16 rounded-md border border-solid border-gray-500 outline-none"
              min={0}
              max={100000}
            />
            <button className="py-1 px-2 font-normal text-sm tracking-wider border border-solid border-gray-400 rounded-md">
              Go
            </button>
          </div>
        </ul>
      </div>
      <div className="flex flex-col items-start mt-4">
        <h3 className="font-semibold text-sm tracking-wide mb-1">
          Availability
        </h3>
        <div className="flex items-center">
          <input type="checkbox" name="lenovo" id="outOfStock" />
          <label
            htmlFor="outOfStock"
            className="text-sm hover:text-amazon-orange ml-1"
          >
            Include Out of Stock
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductSearchSideabr;
