import React from "react";
import AmazonLogo from "../../images/amazon-brand-logo.svg";

function Logo() {
  return (
    <div className="flex items-center relative max-w-[9rem] border-[1px] border-transparent hover:border-white rounded-[0.25rem]">
      <a href="/" className="w-full p-1 flex items-center">
        <img
          src={AmazonLogo}
          alt="amazon-brand-logo"
          className="max-w-[7rem] w-full"
        />
        <span className="text-white font-medium relative -top-[6px]">.in</span>
      </a>
    </div>
  );
}

export default Logo;
