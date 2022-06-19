import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

function SearchBox() {
  const selectMenuList = [
    "All",
    "Alexa Skills",
    "Amazon Devices",
    "Amazon Fashion",
    "Amazon Fresh",
    "Amazon Pharmacy",
    "Appliances",
    "Apps & Games",
    "Baby",
    "Beauty",
    "Books",
    "Car & Motorbike",
    "Clothing & Accessories",
    "Collectibles",
    "Computers & Accessories",
    "Deals",
    "Electronics",
    "Furniture",
    "Garden & Outdoors",
    "Gift Cards",
    "Grocery & Gourmet Foods",
    "Health & Personal Care",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Jewellery",
    "Kindle Store",
    "Luggage & Bags",
    "Luxury Beauty",
    "Movies & TV Shows",
    "Music",
    "Musical Instruments",
    "Office Products",
    "Pet Supplies",
    "Prime Video",
    "Shoes & Handbags",
    "Software",
    "Sports, Fitness & Outdoors",
    "Subscribe & Save",
    "Tools & Home Improvement",
    "Toys & Games",
    "Under ₹500",
    "Video Games",
    "Watches",
  ];

  const [first, setfirst] = useState("All");
  const [selected, setSelected] = useState(false);

  return (
    <div
      id="search-box"
      className={`relative mx-4 grid grid-cols-[minmax(20px,auto)_1fr_48px]  max-w-[700px] w-full bg-red-100 rounded-md ${
        selected ? "shadow-amazon-box-shadow" : ""
      } `}
    >
      <div
        className="rounded-tl-md rounded-bl-md focus-within:shadow-amazon-box-shadow mr-[2px] shadow-[2px_0_0_0_#cdcdcd]"
        id="dad"
      >
        <div className="relative rounded-tl-md rounded-bl-md overflow-hidden w-auto">
          <p className="flex items-center bg-light-gray py-3">
            <span className="ml-2 text-xs font-normal tracking-wider">
              {first}
            </span>
            <IoMdArrowDropdown className="ml-2" />
          </p>
          <select
            id="select-menu"
            name="selectMenuList"
            className="absolute top-0 left-0 w-auto opacity-0 py-2 cursor-pointer"
            onChange={(e) => setfirst(e.target.value)}
          >
            {selectMenuList.map((menuItem) => (
              <option key={menuItem} value={menuItem}>
                {menuItem}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="h-10">
        <input
          id="input-search"
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          type="text"
          placeholder="Search for products"
          className="outline-none px-4 py-2 font-normal text-sm tracking-wider w-full h-full"
        />
      </div>
      <div className="ml-auto rounded-tr-md rounded-br-md relative w-12 h-10 flex items-center justify-center cursor-pointer bg-[#febd69] hover:bg-[#f3a847] ">
        <BsSearch />
      </div>
    </div>
  );
}

export default SearchBox;
