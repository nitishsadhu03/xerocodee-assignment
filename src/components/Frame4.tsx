import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Frame4 = () => {
  return (
    <div className="flex flex-col font-epilogue my-24">
      <img src="assets/vector1.svg" className="hidden lg:flex absolute translate-x-[76rem] translate-y-[30rem] w-48"/>
        <div className="flex flex-col lg:flex-row justify-around mx-12 lg:mx-32 gap-8">
            <div className="relative flex items-center justify-center">
                <img src="/assets/vector3.svg" className="lg:h-24 lg:w-28 h-14 absolute top-14 left-8 lg:top-28 lg:-left-3"/>
                <img src="/assets/Intersect.png" className="lg:h-[30rem] lg:w-[32rem] w-[15rem] h-[15rem]"/>
                <img src="/assets/vector4.svg" className="lg:h-72 lg:w-72 h-44 w-64 absolute top-20 left-24 lg:top-48 lg:left-64 -z-10"/>
            </div>
            <div className="flex flex-col gap-8 lg:w-[30rem]">
                <h1 className="text-2xl lg:text-4xl font-semibold text-black/70 break-normal leading-normal text-center lg:text-left">We've stopped counting. Over 500 brands count on us.</h1>
                <p className="text-lg font-semibold text-black/60 text-center lg:text-left">Our 4,000+ team has expertise in almost every programming language.</p>
            </div>
        </div>
        <div className="flex my-6 w-full lg:-translate-y-64">
        <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          700: {
            slidesPerView: 3.5,
            spaceBetween: 10,
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
          <div className="flex flex-col justify-center items-start gap-4 h-[30rem] w-64  lg:w-80 my-16 px-5 py-4 bg-white rounded-xl shadow-xl">

          <img src="/assets/stars.png" width={120}/>
          <h1 className="text-md lg:text-lg font-semibold text-black/80">"Exceptional Solutions, Exceeded Expectations!"</h1>
          <p className="text-xsm lg:text-sm text-black/60 leading-relaxed lg:leading-loose">"Working with Nearshore has been an absolute pleasure. Their team took the time to understand our unique needs and delivered a solution that not only met but exceeded our expectations. Their expertise and commitment to excellence are truly commendable."</p>
          <hr className="w-full border-2"/>
          
          
          <div className="flex gap-4 items-center">
            <img src="/assets/loom.png" className="h-8 w-8"/>
            <div>
              <h1 className="text-sm lg:text-md font-semibold text-black/80">Mary Johnson</h1>
              <p className="text-xsm lg:text-sm text-black/70">CEO of TechCraft Solutions</p>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col justify-center items-start gap-4 w-64 h-[30rem] lg:w-80 my-16 px-5 py-4 bg-white rounded-xl shadow-xl">

          <img src="/assets/stars.png" width={120}/>
          <h1 className="text-md lg:text-lg font-semibold text-black/80">"Transformed Our Business with Innovative Tech!"</h1>
          <p className="text-xsm lg:text-sm text-black/60 leading-relaxed lg:leading-loose">"We owe a significant part of our success to [Company Name]. Their custom software solution streamlined our processes, saving us time and resources. Their team's dedication to innovation and problem-solving is unmatched. We're grateful for their partnership."</p>
          <hr className="w-full border-2"/>
          
          
          <div className="flex gap-4 items-center">
            <img src="/assets/fina.png" className="h-8 w-8"/>
            <div>
              <h1 className="text-sm lg:text-md font-semibold text-black/80">Mark Williams</h1>
              <p className="text-xsm lg:text-sm text-black/70">COO of InnovateNow Inc</p>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col justify-center items-start gap-4 w-64 h-[30rem] lg:w-80 my-16 px-5 py-4 bg-white rounded-xl shadow-xl">

          <img src="/assets/stars.png" width={120}/>
          <h1 className="text-md lg:text-lg font-semibold text-black/80">"Sculpted User Experiences Beyond Imagination!"</h1>
          <p className="text-xsm lg:text-sm text-black/60 leading-relaxed lg:leading-loose">"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."</p>
          <hr className="w-full border-2"/>
          
          
          <div className="flex gap-4 items-center">
            <img src="/assets/dovetail.png" className="h-8 w-8"/>
            <div>
              <h1 className="text-sm lg:text-md font-semibold text-black/80">Emily Clark</h1>
              <p className="text-xsm lg:text-sm text-black/70">CMO of Visionary Apps</p>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex flex-col justify-center items-start gap-4 h-[30rem] w-64 lg:w-80 my-16 px-5 py-4 bg-white rounded-xl shadow-xl">

          <img src="/assets/stars.png" width={120}/>
          <h1 className="text-md lg:text-lg font-semibold text-black/80">"Sculpted User Experiences Beyond Imagination!"</h1>
          <p className="text-xsm lg:text-sm text-black/60 leading-relaxed lg:leading-loose">"The UI/UX design crafted by [Company Name] turned our app into a masterpiece. The attention to detail, intuitive design, and user-centric approach have resulted in rave reviews from our customers. Their design expertise has taken our brand to a whole new level."</p>
          <hr className="w-full border-2"/>
          
          
          <div className="flex gap-4 items-center">
            <img src="/assets/dovetail.png" className="h-8 w-8"/>
            <div>
              <h1 className="text-sm lg:text-md font-semibold text-black/80">Emily Clark</h1>
              <p className="text-xsm lg:text-sm text-black/70">CMO of Visionary Apps</p>
            </div>
          </div>
          </div>
          </SwiperSlide>
          <div className="relative bottom-2 flex">
          <div className="relative left-[35%] lg:left-[46%]">
            <ChevronLeft className="swiper-button-prev" color="black"/>
          </div>
          <div className="relative left-[65%] lg:left-[54%]">
            <ChevronRight className="swiper-button-next" color="black"/>
          </div>
        </div>
        </Swiper>
        </div>
    </div>
  )
}

export default Frame4