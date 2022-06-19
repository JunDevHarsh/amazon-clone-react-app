import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import IndiaFlag from "../../images/india.svg";

function LanguageSelection() {
  const indianLanguages = [
    {
      id: 1,
      language: "हिन्दी",
      shortName: "HI",
    },
    {
      id: 2,
      language: "தமிழ்",
      shortName: "TA",
    },
    {
      id: 3,
      language: "తెలుగు",
      shortName: "TE",
    },
    {
      id: 4,
      language: "ಕನ್ನಡ",
      shortName: "KN",
    },
    {
      id: 5,
      language: "മലയാളം",
      shortName: "ML",
    },
    {
      id: 6,
      language: "বাংলা",
      shortName: "BN",
    },
    {
      id: 7,
      language: "मराठी",
      shortName: "MR",
    },
  ];

  return (
    <div className="border-[1px] border-transparent hover:border-white rounded-[0.25rem]">
      <div className="dropdown-btn relative flex items-end justify-between mx-2 py-3 w-11 cursor-pointer">
        <img src={IndiaFlag} alt="India-flag-img" className="w-6" />
        <IoMdArrowDropdown className="text-gray-200" />
        <div className="dropdown-content w-56 flex flex-col items-start rounded-md bg-light-gray p-3 absolute -left-4 top-full opacity-0 pointer-events-none transition-opacity duration-700">
          <span
            id="arrow"
            className="bg-light-gray absolute left-1/4 -top-1 -translate-x-1/4 rotate-45 w-4 h-4"
          ></span>
          <ul className="w-full">
            <li className="flex items-center w-full pointer-events-none">
              <div className="w-4 h-4 border-[1px] border-solid border-gray-400 rounded-[50%] flex items-center justify-center">
                <div className="w-[6px] h-[6px] bg-amazon-orange rounded-[50%]"></div>
              </div>
              <p className="text-slate-800 text-sm ml-2 tracking-wider">
                English - EN
              </p>
            </li>
            <hr className="w-[87%] ml-auto my-2" />
            {indianLanguages.map((indLanguage) => (
              <li
                className="flex items-center w-full my-3 language-item"
                key={indLanguage.id}
              >
                <div className="w-4 h-4 border-[1px] border-solid border-gray-400 rounded-[50%] flex items-center justify-center">
                  <div className="w-[6px] h-[6px] bg-amazon-orange rounded-[50%] language-item-dot opacity-0"></div>
                </div>
                <p className="text-slate-800 text-sm ml-3 tracking-wider">
                  {`${indLanguage.language} - ${indLanguage.shortName}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelection;
