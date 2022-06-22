import React from "react";
import { MdStarOutline, MdStar } from "react-icons/md";

function CustomerRating({ rating }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) =>
        index < 5 - rating ? (
          <MdStar key={index} className="text-amazon-yellow-orange text-lg" />
        ) : (
          <MdStarOutline key={index} className="text-amazon-orange text-lg" />
        )
      )}
    </div>
  );
}

export default CustomerRating;
