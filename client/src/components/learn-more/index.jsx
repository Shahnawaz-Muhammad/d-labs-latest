import React from "react";
import { Link } from "react-router-dom";

export default function LearnMore() {
  return (
    <div className="w-full flex justify-center bg-bgGray">
      <div className="max-w-screen-xl w-full py-20 px-8 xl:px-0">
        {/* <div className="flex justify-between text-sm">
        <h1>01 WELCOME TO WORK HUB</h1>
        <button>FOLLOW US</button>
      </div> */}
        <div className="flex flex-col items-center text-center pt-10 lg:pt-10 gap-8">
          <h2 className="text-orange font-bold uppercase text-lg">
            LEARN AND GROW
          </h2>
          <h1 className="text-4xl font-bold lg:text-7xl text-darkGray">
            Sustainable Coworking <br />
            in Your Town
          </h1>
          <div className="flex gap-3 items-center">
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <div className="w-2 h-2 bg-orange rounded-full"></div>
            <div className="w-2 h-2 bg-orange rounded-full"></div>
          </div>
          <p className="max-w-lg text-textGray">
          As we emphasize sustainability and comfort within our coworking space, we wholeheartedly guarantee your complete satisfaction and the opportunity to maximize your overall experience while working here.
          </p>
          <Link to="/about" className="px-10 py-4 bg-orange mt-8  lg:mt-12 text-white">
              Learn More
            </Link>
        </div>
      </div>
    </div>
  );
}
