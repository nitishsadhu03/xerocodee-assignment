import "../index.css";

const Hero = () => {
  return (
    <div
      className="lg:h-screen md:h-screen h-full lg:ml-[60px] lg:mr-[49px] lg:mb-[72px] lg:mt-[1px] bg-[url(/assets/hero.png)] bg-cover bg-center bg-no-repeat relative
            overflow-hidden
            block
            z-10 before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-black/65
            lg:before:bg-gradient-to-r
           lg:before:from-white
            lg:before:to-transparent
            before:opacity-100
            before:z-[-5] rounded-3xl"
    >
      <div
        className="flex justify-center items-start flex-col my-10 ml-5 mr-18 lg:ml-[60px] lg:mr-[890px] lg:mt-[135px] lg:mb-[279px] lg:gap-[20px] md:my-32 md:ml-24 md:mr-48 font-epilogue
"
      >
        <div className="flex flex-col gap-6 items-start">
          <h2 className="text-md md:text-xl lg:text-2xl text-[#F3BC4C] font-medium w-full">
            TECH SERVICES
          </h2>
          <h1 className="text-5xl md:text-6xl  lg:text-6xl text-white lg:text-black/70 font-semibold break-normal">
            TechSynergy: Innovate, Create, Elevate
          </h1>
          <p className="text-sm md:text-md lg:text-lg font-medium text-white lg:text-black/60 py-[20px]">
            Unlocking Possibilities, One Code at a Time
          </p>

          <button className="bg-[#66B066] rounded-full w-28 py-2 px-2 lg:w-auto  lg:py-3 lg:px-8 text-white text-xsm font-medium">
            See projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
