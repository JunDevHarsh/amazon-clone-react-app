import React from "react";
import Columns from "./Columns";

function Footer() {
  return (
    <div className="flex flex-col items-center w-full bg-light-dark-blue">
      <button className="w-full text-sm text-white text-center py-2 bg-[#37475A] hover:bg-[#485769]">
        Back to top
      </button>
      <Columns />
    </div>
  );
}

export default Footer;
