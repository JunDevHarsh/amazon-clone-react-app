import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function UserLogin() {
  const listMenu = [
    "Create a Wish List",
    "Wish from Any Website",
    "Baby Wishlist",
    "Discover Your Style",
    "Explore Showroom",
  ];

  const accountMenu = [
    "Your Account",
    "Your Orders",
    "Your Wish List",
    "Your Recommendations",
    "Your Prime Membership",
    "Your Prime Video",
    "Your Subsccribe & Save items",
    "Memberships & Subscriptions",
    "Your Amazon Business Account",
    "Your Seller Account",
    "Manage Your Content and Devices",
  ];

  return (
    <div className="relative border-[1px] border-transparent hover:border-white rounded-[0.25rem] py-[2px] px-[3px]">
      <div className="flex flex-col items-start cursor-pointer dropdown-btn">
        <p className="text-white font-normal text-sm">Hello, Sign In</p>
        <div className="flex items-center">
          <p className="text-white font-medium text-sm">Account & Lists</p>
          <IoMdArrowDropdown className="text-white ml-[2px]" />
        </div>
        <div className="dropdown-content py-4 px-8 absolute top-full -right-8 w-[30rem] h-auto rounded-md bg-light-gray cursor-default opacity-0 pointer-events-none transition-opacity duration-700">
          <div className="absolute -top-[2px] right-[2.125rem] bg-inherit w-4 h-4 bg-light-gray rotate-45"></div>
          <div className="flex flex-col items-center">
            <Link
              to={"/signIn"}
              className="bg-gradient-to-b from-[#f8e3ad] to-[#eeba37] w-48 py-[6px] text-center text-sm rounded-sm shadow-[0_0_0_1px_#b9ad72]"
            >
              Sign in
            </Link>
            <div>
              <span className="text-[10px] text-[#6a6a6a] tracking-wider">
                New Customer?
              </span>
              <Link
                to={"/signUp"}
                className="text-xs text-blue-500 ml-1 hover:text-amazon-orange hover:underline"
              >
                Start here
              </Link>
            </div>
          </div>
          <hr className="mt-4 border-b-[0.5px] border-b-solid border-b-[#f3f3f3]" />
          <div className="flex items-start">
            <div className="w-1/2 py-4">
              <h3 className="font-normal">Your Lists</h3>
              <ul className="w-full">
                {listMenu.map((list, index) => (
                  <li
                    className="text-[#6a6a6a] text-[13px] font-normal my-2 cursor-pointer hover:text-amazon-orange hover:underline"
                    key={index}
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 py-4">
              <h3 className="font-normal">Your Account</h3>
              <ul className="w-full">
                {accountMenu.map((account, index) => (
                  <li
                    className="text-[#6a6a6a] text-[13px] font-normal my-2 cursor-pointer hover:text-amazon-orange hover:underline"
                    key={index}
                  >
                    {account}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
