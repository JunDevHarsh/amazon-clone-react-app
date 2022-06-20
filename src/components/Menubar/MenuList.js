import React from "react";

function MenuList() {
  const menuBarList = [
    "Best Sellers",
    "Mobiles",
    "Customer Service",
    "Today's Deals",
    "Fashion",
    "Electronics",
    "Prime",
    "Home & Kitchen",
    "Amazon Pay",
  ];
  return (
    <div className="flex items-center gap-1">
      {menuBarList.map((item) => (
        <div
          key={item}
          className="font-medium text-sm text-white border border-transparent border-solid hover:border-white hover:cursor-pointer rounded-[4px] px-[6px] py-[4px]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default MenuList;
