import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BiMobile } from "react-icons/bi";
// import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import logo from "../../assets/innovista-logo-white.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({ mode: "all" });

  // const onSubmit = (data) => {
  //   console.log(data); // Handle form submission here
  // };

  return (
    <div
      className={`w-full z-20 flex justify-center py-20 bg-[#3d3d3d] text-bgLight mx-auto px-4 md:px-8 xl:px-4`}
    >
      <div className="max-w-screen-xl w-full">
        <div className="w-full grid grid-cols-4 gap-8 lg:gap-0">
          <div className="col-span-full sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
            <div className=" w-40 ">
              <Link to="/">
                <img src={logo} alt="" className="object-cover " />
              </Link>
            </div>{" "}
            <div className="flex flex-col gap-4 font-light">
              <div className="flex items-start gap-3 text-lightGray">
                <IoHomeOutline className="mt-1" />
                <div className="flex flex-col ">
                  <p> Pakistan</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-lightGray">
                <TfiEmail />
                <p>inovista@support.com</p>
              </div>
              <div className="flex items-center gap-3 text-lightGray">
                <BiMobile />
                <p>+92 123 12 34 567</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex w-full col-span-full h-[.1px] bg-lightGray"></div>
          <div className="col-span-full sm:col-span-2 lg:col-span-1 flex flex-col gap-8 text-lightGray">
            <h2 className="text-xl font-semibold text-white">Links</h2>
            <div className="flex flex-col gap-4 font-light">
              <Link to="/about" className="text-white hover:text-orange">
                About Us
              </Link>
              <Link to="/services" className="text-white hover:text-orange">
                Services
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white hover:text-orange"
              >
                Privacy
              </Link>
              
            </div>
          </div>
          <div className="lg:hidden flex w-full col-span-full h-[.1px] bg-lightGray"></div>
          <div className="col-span-full sm:col-span-2 lg:col-span-1 flex flex-col gap-8 text-lightGray">
            <h2 className="text-xl font-semibold text-white">Navigate</h2>
            <div className="flex flex-col gap-4 font-light">
              <Link to="/pricing" className="text-white hover:text-orange">
                Pricing
              </Link>
              <Link to="/contact" className="text-white hover:text-orange">
                Contact Us
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-white hover:text-orange"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex w-full col-span-full h-[.1px] bg-lightGray"></div>
          <div className="col-span-full sm:col-span-2 lg:col-span-1 flex flex-col gap-8 text-lightGray">
            <h2 className="text-xl font-semibold text-white">Social Links</h2>
            <div className="flex text-2xl gap-4 font-light">
              <BsFacebook className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <RiTwitterXLine className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <BsLinkedin className="hover:scale-125 transition-all duration-300 cursor-pointer" />
              <BsInstagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />

              {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full relative  min-h-[4.2rem]">
                  <input
                    type="email"
                    className="w-full py-4 pl-4 pr-14 text-black focus:outline-none"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Please enter a valid email",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid Email",
                      },
                    })}
                  />
                  <button type="submit">
                    <HiOutlineArrowLongRight className="absolute right-3 top-3 text-gray-600 text-4xl hover:right-2 transition-all ease-in-out duration-300 cursor-pointer" />
                  </button>
                </div>
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                <div>
                  <input
                    type="checkbox"
                    name="agreement"
                    id=""
                    {...register("agreement", {
                      required: "You must agree to the terms & conditions",
                    })}
                  />
                  <span className="ml-3">
                    I have read and agree to the terms & conditions
                  </span>
                  {errors.agreement && (
                    <p className="text-red-500">{errors.agreement.message}</p>
                  )}
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
