import React from "react";
import AmazonLogo from "../../images/amazon-brand-logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons//ai";
import { IoMdArrowDropright } from "react-icons/io";

function NotFound() {
  return (
    <div className="flex flex-col items-center mt-4">
      <Link to={"/"}>
        <img className="w-28" src={AmazonLogo} alt="amazon-brand-logo" />
      </Link>
      <div className="flex items-center max-w-3xl w-full mt-8">
        <div className="flex items-center justify-center">
          <AiOutlineQuestionCircle className="text-amazon-orange text-3xl font-semibold" />
        </div>
        <div className="ml-4 flex flex-col items-start">
          <h3 className="font-semibold text-lg text-amazon-orange tracking-wider">
            Looking for something?
          </h3>
          <p className="font-normal text-base tracking-wider">
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
          <div className="flex items-center mt-2">
            <IoMdArrowDropright className="text-amazon-orange text-lg" />
            <p className="font-semibold text-base tracking-wider">
              Go to amazon-clone-react-web-app.netlify.app's{" "}
              <Link to={"/"}>
                <span className="underline text-blue-400 tracking-wider">
                  Home
                </span>
              </Link>{" "}
              Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
