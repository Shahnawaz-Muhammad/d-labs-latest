import React, { useState } from "react";
import offerBg1 from "../../assets/images/offerBg1.jpg";
import offerBg2 from "../../assets/images/offerBg2.jpg";
import offerBg3 from "../../assets/images/offerBg3.jpg";
import { Link } from "react-router-dom";

const WeOffer = () => {
  const [bgOpacity1, setBgOpacity1] = useState(false);
  const [bgOpacity2, setBgOpacity2] = useState(false);
  const [bgOpacity3, setBgOpacity3] = useState(false);
  return (
    <div className="w-full h-full max-w-full overflow-x-hidden">
      <div className="flex flex-col lg:flex-row h-full max-w-full bg-black">
        <div className="w-full lg:w-1/3 flex  flex-col">
          <div
            className="h-80 lg:h-1/2 w-full"
            onMouseEnter={() => setBgOpacity1(true)}
            onMouseLeave={() => setBgOpacity1(false)}
          >
            <div className="w-full h-full relative">
              <img
                src={offerBg1}
                alt=""
                className="h-full w-full object-cover"
              />
              <div
                className={`bg-black absolute top-0 w-full h-full opacity-90 ${
                  bgOpacity1 ? "bg-opacity-80" : "bg-opacity-60"
                } transition-all duration-300 bg-blend-darken`}
              ></div>

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl font-bold text-orange">
                    Private Office
                  </h1>
                  {/* <Link
                    to="/book-a-tour"
                    className="text-white font-semibold text-lg underline"
                  >
                    Book A Tour
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-80 lg:h-1/2 w-full "
            onMouseEnter={() => setBgOpacity2(true)}
            onMouseLeave={() => setBgOpacity2(false)}
          >
            <div className="w-full h-full relative">
              <img
                src={offerBg2}
                alt=""
                className="h-full w-full object-cover"
              />
              <div
                className={`bg-black absolute top-0 w-full h-full opacity-90 ${
                  bgOpacity2 ? "bg-opacity-80" : "bg-opacity-60"
                } transition-all duration-300 bg-blend-darken`}
              ></div>

              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex flex-col items-center ">
                  <h1 className="text-2xl font-bold text-orange">
                    Conference Room
                  </h1>
                  {/* <Link
                    to="/book-a-tour"
                    className="text-white font-semibold text-lg underline"
                  >
                    Book A Tour
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-full md:h-screen lg:h-full w-full"
          onMouseEnter={() => setBgOpacity3(true)}
          onMouseLeave={() => setBgOpacity3(false)}
        >
          <div className="w-full h-full relative">
            <img src={offerBg3} alt="" className="h-full w-full object-cover" />
            <div
              className={`bg-black absolute top-0 w-full h-full opacity-90 ${
                bgOpacity3 ? "bg-opacity-80" : "bg-opacity-60"
              } transition-all duration-300 bg-blend-darken`}
            ></div>

            <div className="absolute top-0 md:left-20 w-full h-full flex justify-center md:justify-start items-center">
              <div className="flex flex-col items-center md:items-start gap-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  A Hospitality Inspired <br />
                  Co-Working Space.
                </h1>
                <div>
                  <Link
                    to="/contact"
                    className="text-lg md:text-xl bg-orange hover:bg-orangeDark px-4 py-2 md:px-8 md:py-4 text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
