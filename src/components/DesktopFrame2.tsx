import { data } from "../constants/data";




const DesktopFrame2 = () => {


  return (

    <div className="hidden lg:relative lg:flex flex-col justify-center items-center mx-10 my-24 font-epilogue">
      <div className="flex gap-5 mx-14 lg:mx-48 pr-16 lg:pl-36 justify-center items-start">
        <img src="/assets/vector1.svg" height={72} width={72} className="top-0"/>
        <h1 className="text-3xl lg:text-4xl text-black/70 font-semibold break-normal text-start">
          Empowering Your Digital Vision: Our Comprehensive Tech Services.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6  mx-8 my-8 justify-center items-center">
        {data.map((item) => (
            <div key={item.id} className="lg:relative flex flex-col mt-6 shadow-xl rounded-xl w-80 h-72 py-8 px-3">
            <img src={item.icon} height={42} width={42}/>
            <div className="pt-4">
            <h5 className="mb-2 text-2xl font-semibold leading-snug text-black/70">
              {item.label}
            </h5>
            <p className="block text-base text-black/60">
              {item.desc}
            </p>
          </div>
          </div>
          ))}
      </div>
      
      {/* <img src="/assets/vector2.svg" height={72} width={160} className="absolute top-[20rem] left-[52rem]"/>
      <img src="/assets/vector1.svg" height={72} width={160} className="absolute top-[32rem] z-0 left-[26rem]"/> */}
      </div>
  );
};

export default DesktopFrame2;
