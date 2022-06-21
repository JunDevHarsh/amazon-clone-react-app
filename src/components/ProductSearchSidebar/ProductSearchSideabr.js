import React from "react";

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
    </div>
  );
}

export default ProductSearchSideabr;
