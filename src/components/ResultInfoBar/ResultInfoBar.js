import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function ResultInfoBar() {
  const list = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Avg. Customer Review",
    "Newest Arrivals",
  ];
  return (
    <div className="w-full bg-white px-4 py-2 border-t border-b border-t-solid border-b-solid border-t-[#ccc] border-b-[#ccc] shadow-[0_5px_7px_-3px_#ddd]">
      <div className="flex items-center justify-between">
        <p className="font-medium text-sm tracking-wide">
          0 - 0 of 0 results for ""
        </p>
        <div
          id="sortListMenu"
          className="relative flex items-center bg-[#F0F2F2] hover:bg-[#E3E6E6] border border-solid border-[#D5D9D9] rounded-2xl px-1 hover:cursor-pointer"
        >
          <span className="font-light text-xs tracking-wide">Sort by:</span>
          <select
            name="sort-list-menu"
            className="font-light text-xs tracking-wide outline-none px-2 py-1 cursor-pointer bg-transparent"
          >
            {list.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <IoMdArrowDropdown className="absolute top-1/2 right-0 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}

export default ResultInfoBar;
