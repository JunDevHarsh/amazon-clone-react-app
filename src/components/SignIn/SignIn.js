import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../../images/amazon-brand-logo.svg";

function SignIn() {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Redirecting...");
    // redirecting the user to main page after one second - (for testing)
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-sm w-full">
      <div className="w-28 mt-2">
        <Link to={"/"}>
          <img src={AmazonLogo} alt="amazon-brand0-logo" />
        </Link>
      </div>
      <div className="w-full p-4 border border-solid border-gray-300 rounded-md my-4">
        <form onSubmit={handleOnSubmit}>
          <h2 className="font-semibold text-xl tracking-wider mb-4">Sign-In</h2>
          <div className="flex flex-col items-start my-2">
            <label
              htmlFor="inputEmail"
              className="text-sm font-semibold tracking-wider"
            >
              Email
            </label>
            <input
              type="text"
              className="w-full mt-2 border border-solid border-gray-300 rounded-sm px-2 py-1 text-base tracking-wider outline-none focus:shadow-amazon-box-shadow"
              name="email"
              autoFocus
              id="inputEmail"
              required
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <div className="w-full flex items-center justify-between">
              <label
                htmlFor="inputPassword"
                className="text-sm font-semibold tracking-wider"
              >
                Password
              </label>
              <a
                href="/"
                className="text-blue-500 text-sm tracking-wider cursor-pointer hover:text-amazon-orange hover:underline"
              >
                Forgot Password
              </a>
            </div>
            <input
              type="password"
              className="w-full mt-2 border border-solid border-gray-300 rounded-sm px-2 py-1 text-base tracking-wider outline-none focus:shadow-amazon-box-shadow"
              name="password"
              id="inputPassword"
              required
            />
          </div>
          <button
            type="submit"
            className="my-2 bg-gradient-to-b from-[#f8e3ad] to-[#eeba37] w-full py-[6px] text-center text-sm rounded-sm shadow-[0_0_0_1px_#b9ad72] hover:bg-gradient-to-b hover:from-[#f5d78e] hover:to-[#eeb933]"
          >
            Sign-In
          </button>
        </form>
        <p className="my-2 text-xs tracking-wider font-normal text-gray-500">
          By continuing, you agree to Amazon-clone-react-app's{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Conditions of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Privacy Notice
          </span>
          .
        </p>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center mb-2 w-full">
        <div className="w-full border-t border-t-solid border-t-[#ebecef]"></div>
        <p className="text-xs tracking-wider text-gray-500">New to Amazon?</p>
        <div className="w-full border-t border-t-solid border-t-[#ebecef]"></div>
      </div>
      <Link
        to={"/signUp"}
        className="w-full py-2 text-center text-sm tracking-wider bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] hover:bg-gradient-to-b hover:from-[#e7eaf0] hover:to-[#d9dce1] border border-solid border-[#adb1b8_#a2a6ac_#8d9096] rounded-md"
      >
        Create your Account account
      </Link>
    </div>
  );
}

export default SignIn;
