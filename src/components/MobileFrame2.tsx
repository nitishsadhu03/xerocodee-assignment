import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { data } from "../constants/data";


const MobileFrame2 = () => {
  return (
    <div className="lg:hidden flex flex-col justify-center items-center my-24 font-epilogue">
      <div className="flex gap-4 mx-5 justify-center items-start">
        <img src="/assets/vector1.svg" height={64} width={64} className="top-0"/>
        <h1 className="text-2xl  text-black/70 font-semibold break-normal text-start">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </h1>
      </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.5,
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="grid my-8 gap-4 justify-center items-center">
          <div key={item.id} className="flex flex-col my-6 shadow-xl rounded-xl h-72 py-8 px-3">
            <img src={item.icon} height={36} width={36}/>
            <div className="pt-4">
            <h5 className="mb-2 text-lg font-semibold leading-snug text-black/70 break-normal">
              {item.label}
            </h5>
            <p className="text-sm  text-black/60 break-normal">
              {item.desc}
            </p>
          </div>
          </div>
          </div>
          </SwiperSlide>
          ))}
      </Swiper>
      

      </div>
  )
}

export default MobileFrame2