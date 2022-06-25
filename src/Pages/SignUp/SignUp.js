import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import AmazonLogo from "../../images/amazon-brand-logo.svg";

const SignUp = () => {
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
          <h2 className="font-semibold text-xl tracking-wider mb-4">
            Create Account
          </h2>
          <div className="flex flex-col items-start my-2">
            <label
              htmlFor="inputName"
              className="text-sm font-semibold tracking-wider"
            >
              Your name
            </label>
            <input
              type="text"
              className="w-full mt-2 border border-solid border-gray-300 rounded-sm px-2 py-1 text-sm tracking-wider outline-none focus:shadow-amazon-box-shadow"
              name="name"
              autoFocus
              id="inputName"
              placeholder="First and last name"
              required
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label
              htmlFor="inputLoginEmail"
              className="text-sm font-semibold tracking-wider"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full mt-2 border border-solid border-gray-300 rounded-sm px-2 py-1 text-sm tracking-wider outline-none focus:shadow-amazon-box-shadow"
              name="email"
              id="inputLoginEmail"
              placeholder="E-mail"
              required
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label
              htmlFor="inputLoginPassword"
              className="text-sm font-semibold tracking-wider"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 border border-solid border-gray-300 rounded-sm px-2 py-1 text-sm tracking-wider outline-none focus:shadow-amazon-box-shadow"
              name="password"
              id="inputLoginPassword"
              placeholder="At least 6 characters"
              required
            />
          </div>
          <span className="text-xs tracking-wider text-gray-700">
            Password must be at least 6 characters
          </span>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-b from-[#f8e3ad] to-[#eeba37] w-full py-[6px] text-center text-sm rounded-sm shadow-[0_0_0_1px_#b9ad72] hover:bg-gradient-to-b hover:from-[#f5d78e] hover:to-[#eeb933]"
          >
            Continue
          </button>

          <div className="flex items-center mt-4">
            <p className="text-sm tracking-wider">Already have an account?</p>
            <Link
              to={"/signIn"}
              className="text-sm text-blue-600 hover:text-amazon-orange hover:underline tracking-wider flex items-center ml-1"
            >
              <span>Sign in</span> <IoMdArrowDropright />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
