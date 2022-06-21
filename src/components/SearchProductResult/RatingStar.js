import React from "react";
import { MdStarHalf, MdStarOutline, MdStar } from "react-icons/md";

function RatingStar({ ratings }) {
  function showRatingStar(rating) {
    let scoreTotalRatings = Object.values(rating).reduce(
      (acc, curr, index) => acc + Number(curr * (index + 1)),
      0
    );
    let responseTotalRatings = Object.values(rating).reduce(
      (acc, curr) => acc + Number(curr),
      0
    );
    return Number((scoreTotalRatings / responseTotalRatings).toFixed(1));
  }

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        let value = showRatingStar(ratings);
        let remainder = (value * 10) % 10;
        let quotient = parseInt((value * 10) / 10);

        if (
          index < quotient ||
          (index <= quotient && remainder >= 8 && remainder <= 9)
        ) {
          return (
            <MdStar key={index} className="text-amazon-orange text-base" />
          );
        } else if (index <= quotient && remainder >= 3 && remainder <= 7) {
          return (
            <MdStarHalf key={index} className="text-amazon-orange text-base" />
          );
        } else {
          return (
            <MdStarOutline
              key={index}
              className="text-amazon-orange text-base"
            />
          );
        }
      })}
      <span className="ml-2 text-sm tracking-wide font-normal text-[#007185] hover:text-amazon-orange cursor-pointer">
        {Object.values(ratings).reduce((acc, curr) => acc + Number(curr), 0)}
      </span>
    </div>
  );
}

export default RatingStar;
