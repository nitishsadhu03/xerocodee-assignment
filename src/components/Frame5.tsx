import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";



const Frame5 = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-8 lg:mx-16 my-10 py-16 bg-[#F7F7FD] rounded-xl font-epilogue relative">
      <div className="lg:flex hidden absolute top-12 right-48 w-20">
        <img src="/assets/vector2.svg" />
      </div>
      <div className="hidden lg:flex absolute bottom-4 left-32 w-20">
        <img src="/assets/vector1.svg" />
      </div>
      <div className="flex flex-col justify-center items-center text-center mb-4">
        <h1 className="text-2xl lg:text-4xl font-semibold text-black/70">
          Choose Us: Your Path to Innovation and{" "}
          <span className="text-[#4AC0F2] block">Success</span>
        </h1>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
          700: {
            slidesPerView: 3.25,
            spaceBetween: 12,
          },
        }}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="max-w-[100%] lg:max-w-[100%]"
      >
        
          <SwiperSlide>
            <div className="flex items-center h-72 w-full mx-2 lg:mx-0 mb-5">
              <div className="flex flex-col bg-white rounded-xl shadow-xl px-8 py-6 h-52 w-[18rem] lg:w-[23rem] gap-5">
                <h1 className="text-lg lg:text-xl font-semibold text-black/70">
                Expertise Across the Tech Spectrum
                </h1>
                <p className="text-sm lg:text-md text-black/60">Our team consists of seasoned developers, designers, and experts who excel in various areas of technology.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center h-72 w-full mx-2 lg:mx-0 mb-5">
              <div className="flex flex-col bg-gradient-to-tr from-[#EDE14F] to-[#62AE6E] rounded-xl shadow-xl px-8 py-6 h-52 w-[18rem] lg:w-[23rem] gap-5">
                <h1 className="text-lg lg:text-xl font-semibold text-white">
                Proven Track Record of Success:
                </h1>
                <p className="text-sm lg:text-md text-white">Our portfolio is a testament to our ability to deliver impactful results.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center h-72 w-full mx-2 lg:mx-0 mb-5">
              <div className="flex flex-col bg-white rounded-xl shadow-xl px-8 py-6 h-52 w-[18rem] lg:w-[23rem] gap-5">
                <h1 className="text-lg lg:text-xl font-semibold text-black/70">
                Collaborative Approach, Transparent Communication:
                </h1>
                <p className="text-sm lg:text-md text-black/60">We believe in working hand-in-hand with our clients.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center h-72 w-full mx-2 lg:mx-0 mb-5">
              <div className="flex flex-col bg-gradient-to-tr from-[#4AC0F2] to-[#3171DE] rounded-xl shadow-xl px-8 py-6 h-52 w-[18rem] lg:w-[23rem] gap-5">
                <h1 className="text-lg lg:text-xl font-semibold text-white">
                Tailored Solutions for Your Unique Needs:
                </h1>
                <p className="text-sm lg:text-md text-white">We understand that no two projects are alike.</p>
              </div>
            </div>
          </SwiperSlide>
        
        <div className="relative bottom-4 flex">
          <div className="relative left-[35%] lg:left-[46%]">
            <ChevronLeft className="swiper-button-prev" color="black"/>
          </div>
          <div className="relative left-[65%] lg:left-[54%]">
            <ChevronRight className="swiper-button-next" color="black"/>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Frame5;
