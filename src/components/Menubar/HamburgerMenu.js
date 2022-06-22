import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HamburgerMenu() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [hamburgerMenuShift, setHamburgerMenuShift] = useState(false);

  const menuList = [
    {
      id: 1,
      itemName: "Trending",
      isTitle: true,
    },
    {
      id: 2,
      itemName: "Best Sellers",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 3,
      itemName: "New Releases",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 4,
      itemName: "Movers and Shakers",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 5,
      itemName: "Digital Content And Devices",
      isTitle: true,
    },
    {
      id: 6,
      itemName: "Echo & Alexa",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 7,
      itemName: "Fire TV",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 8,
      itemName: "Kindle E-Readers & eBooks",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 9,
      itemName: "Audible Audiobooks",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 10,
      itemName: "Amazon Prime Video",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 11,
      itemName: "Amazon Prime Music",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 12,
      itemName: "Shop By Department",
      isTitle: true,
    },
    {
      id: 13,
      itemName: "Mobiles, Computers",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 14,
      itemName: "TV, Appliances, Electronics",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 15,
      itemName: "Men's Fashion",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 16,
      itemName: "Women's Fashion",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 17,
      itemName: "Home, Kitchen, Pets",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 18,
      itemName: "Beauty, Health, Grocery",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 19,
      itemName: "Sports, Fitness, Bags, Luggage",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 20,
      itemName: "Toys, Baby Products, Kids' Fashion",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 21,
      itemName: "Car, Motorbike, Industrial",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 22,
      itemName: "Books",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 23,
      itemName: "Movies, Music & Video Games",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 25,
      itemName: "Programs & Features",
      isTitle: true,
    },
    {
      id: 26,
      itemName: "Gift Cards & Mobile Recharges",
      isTitle: false,
      isMenu: true,
      menu: [],
    },
    {
      id: 27,
      itemName: "Flight Tickets",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 28,
      itemName: "#FoundItOnAmazon",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 29,
      itemName: "Clearance store",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 30,
      itemName: "Help & Settings",
      isTitle: true,
    },
    {
      id: 31,
      itemName: "Your Account",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 32,
      itemName: "Customer Service",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
    {
      id: 33,
      itemName: "Sign In",
      isTitle: false,
      isMenu: false,
      menu: [],
    },
  ];
  return (
    <div>
      <button
        onFocus={() => setHamburgerMenuOpen(true)}
        onBlur={() => {
          setHamburgerMenuOpen(false);
          setTimeout(() => {
            setHamburgerMenuShift(false);
          }, 700);
          return;
        }}
        className="flex items-center border border-transparent border-solid hover:border-white hover:cursor-pointer rounded-[4px] px-[6px] py-[4px]"
      >
        <AiOutlineMenu className="text-white" />
        <span className="ml-1 text-white text-sm">All</span>
        <div
          className={`fixed w-80 h-[100vh] top-0 left-0  transition-transform duration-700 overflow-x-hidden bg-[#fcfcfc] cursor-default ${
            hamburgerMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full sticky top-0 left-0 h-[52px] bg-light-dark-blue z-10">
            <div className="relative w-full flex items-center justify-center p-3">
              <FaUserCircle className="text-white text-lg" />
              <p className="font-medium mx-4 text-xl text-white">
                Hello. Sign In
              </p>
            </div>
          </div>
          <div
            className={`flex w-[40rem] transition-transform duration-300 py-4 ${
              hamburgerMenuShift ? "-translate-x-1/2" : ""
            }`}
          >
            <div className="w-80 flex items-start justify-start flex-col">
              {menuList.map((menuItem) => (
                <div
                  className={`py-2 px-8 w-full text-left ${
                    menuItem.isTitle
                      ? "font-semibold text-black tracking-wider text-base"
                      : "text-gray-600 font-normal text-sm flex items-center justify-between cursor-pointer hover:bg-[#eaeded]"
                  }`}
                  onClick={() => menuItem.isMenu && setHamburgerMenuShift(true)}
                  key={menuItem.id}
                >
                  <span>{menuItem.itemName}</span>
                  {menuItem.isMenu && <IoIosArrowForward />}
                </div>
              ))}
            </div>
            <div className="flex items-start justify-start flex-col w-80">
              <div
                className="py-2 px-8 w-full flex items-center hover:bg-[#eaeded] cursor-pointer"
                onClick={() => setHamburgerMenuShift(false)}
              >
                <IoIosArrowBack />
                <span className="font-semibold text-black tracking-wider text-base ml-2">
                  Main Menu
                </span>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default HamburgerMenu;
