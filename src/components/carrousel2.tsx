
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { proyects } from "../constants/index.js";


const ActiveSlider2 = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[550px] lg:ml-8 ">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {proyects.map((item) => (
          <SwiperSlide key={item.title} >
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black rounded-xl px-6 py-8 h-[450px] w-[300px] mobile:ml-auto mobile:mr-auto overflow-hidden cursor-pointer font-nunito font-extralight">
              <div className="absolute inset-0 glassmorphism-xl bg-center flex flex-col items-center justify-center">
                <h1 className="text-3xl mb-10 font-semibold">{item.title}</h1>
                <div className="flex flex-col items-start justify-start ">
                  {item.techs.map((value, index) => (
                    <ul className="list-disc">
                      <li key={index} className="">{value}</li>
                    </ul>
                  ))}
                </div>

              </div>
              <div className="absolute inset-0 bg-black lg:opacity-50 group-hover:opacity-10 mobile:opacity-0" />

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 mobile:rotate-45 mobile:text-blue-500" />
              <div className="absolute bottom-6 left-16 hidden group-hover:block hover:underline hover:text-blue-500 hover:scale-110 mobile:block"><a href={item.url ? item.url : "#"} target="blank">View site</a></div>
              <div className="absolute bottom-6 left-44 hidden group-hover:block hover:underline hover:text-blue-500 hover:scale-110 mobile:block"><a href={item.repo ? item.repo : "#"} target="blank">Repository</a></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider2;
