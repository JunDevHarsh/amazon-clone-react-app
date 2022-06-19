import React from "react";
import Cart from "./Cart";
import LanguageSelection from "./LanguageSelection";
import LocationDeliver from "./LocationDeliver";
import Logo from "./Logo";
import RO from "./RO";
import SearchBox from "./SearchBox";
import UserLogin from "./UserLogin";

function Header() {
  return (
    <div className="bg-dark-blue py-2 px-2 flex items-center">
      <Logo />
      <LocationDeliver />
      <SearchBox />
      <LanguageSelection />
      <UserLogin />
      <RO />
      <Cart />
    </div>
  );
}

export default Header;
