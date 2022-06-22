import React from "react";
import AmazonLogo from "../../images/amazon-brand-bottom-logo.svg";

function Columns() {
  const aboutList = [
    "About Us",
    "Careers",
    "Press Releases",
    "Amazon Cares",
    "Gift a Smile",
    "Amazon Science",
  ];
  const socialList = ["Facebook", "Twitter", "Instagram"];
  const marketingList = [
    "Sell on Amazon",
    "Sell under Amazon Accelerator",
    "Amazon Global Selling",
    "Become an Affiliate",
    "Fulfilment by Amazon",
    "Advertise Your Products",
    "Amazon Pay on Merchants",
  ];
  const moreList = [
    "COVID-19 and Amazon",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Amazon App Download",
    "Amazon Assistant Download",
    "Help",
  ];
  const languages = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];

  function printList(menuList) {
    return menuList.map((item, index) =>
      index === 0 ? (
        <h3
          className="font-semibold text-white text-sm tracking-widest mb-2"
          key={index}
        >
          {item}
        </h3>
      ) : (
        <li
          key={index}
          className="text-slate-200 text-sm tracking-wider py-1 hover:underline cursor-pointer"
        >
          {item}
        </li>
      )
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-start justify-between flex-wrap max-w-4xl w-full">
        <ul className="flex flex-col items-start mt-16">
          {printList(aboutList)}
        </ul>
        <ul className="flex flex-col items-start mt-16">
          {printList(socialList)}
        </ul>
        <ul className="flex flex-col items-start mt-16">
          {printList(marketingList)}
        </ul>
        <ul className="flex flex-col items-start mt-16">
          {printList(moreList)}
        </ul>
      </div>
      <hr className="border-t border-t-solid border-t-gray-600 w-full mt-16" />
      <div className="flex items-center flex-col max-w-4xl w-full mt-8">
        <img
          src={AmazonLogo}
          className="w-16 h-auto mb-4 cursor-pointer"
          alt="amazon-brand-logo"
        />
        <ul className="flex items-center gap-3 flex-wrap justify-center mb-4">
          {languages.map((langauge, index) => (
            <li
              key={index}
              className="text-xs text-white tracking-wider hover:underline cursor-pointer"
            >
              {langauge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Columns;
