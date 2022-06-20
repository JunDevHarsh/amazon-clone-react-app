import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import MenuList from "./MenuList";

function MenuBar() {
  return (
    <div className="w-full flex items-center px-2 py-1 bg-light-dark-blue">
      <HamburgerMenu />
      <MenuList />
    </div>
  );
}

export default MenuBar;
