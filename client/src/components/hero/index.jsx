import carouselImg1 from "../../assets/images/slider-1-bg1.jpg";
import carouselImg2 from "../../assets/images/slider-1-bg2.jpg";
import carouselImg3 from "../../assets/images/slider-1-bg3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {

  
  const sliderData = [
    {
      id: 1,
      imgUrl: carouselImg1,
      title: "Crafting Your Workspace: Ignite Your Imagination",
      text: "We create a cozy and inspiring atmosphere in our coworking center, ideal for bringing together groups of creative and talented individuals.",
    },
    {
      id: 2,
      imgUrl: carouselImg2,
      title:"Discover Cutting-Edge Campus Courses",
      text: "We provide the perfect environment for talented individuals to join forces and delve into cutting-edge learning experiences.",
    },
    {
      id: 3,
      imgUrl: carouselImg3,
      title:"Elevating Talent Through Community-Wide Collaboration",
      text: "We foster community-wide collaboration to uplift and empower the talent within, creating a dynamic and supportive environment for all.",
    },
  ];

  return (
    <div className=" max-w-full  bg-transparent  px-0 ">
      <div className="relative w-full h-full">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            clickable: true,
            prevEl: ".custom-prev-button",
            nextEl: ".custom-next-button",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          speed={1000}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {sliderData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center flex-col ">
                  <div className="w-full h-screen lg:h-screen max-h-full relative">
                    <img
                      className="w-full h-full object-cover  z-30"
                      src={item.imgUrl}
                      alt=""
                    />

                    <div className="absolute top-0 z-50 flex items-center justify-center w-full h-full ">
                      <div className="w-full max-w-screen-xl">
                      <div className="w-full  flex flex-col  gap-2 lg:gap-3 mx-auto px-4 md:px-8 xl:px-4 ">
                        <div className="text-4xl md:text-xl lg:text-6xl font-bold capitalize text-white flex flex-col gap-4  text-center md:text-start px-5 md:px-0 max-w-lg lg:max-w-4xl">
                          <h2>{item.title}</h2>
                          
                        <p className="text-lg text-lightGray font-normal ">
                          {item.text}
                        </p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full h-full bg-black absolute top-0 left-0 "></div>
      </div>
    </div>
  );
};

export default Hero;
