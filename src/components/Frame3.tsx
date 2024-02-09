

const Frame3 = () => {
  return (
    <div className="relative mx-5 lg:my-36 lg:mx-16 py-8 flex flex-col gap-8 justify-center items-center bg-[#F7F7FD] rounded-3xl overflow-hidden">
        <div className="absolute left-5 top-5">
            <img src="/assets/vector2.svg" className="h-12 w-12 lg:h-auto lg:w-auto"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 font-epilogue w-52 lg:w-96 text-center">
            <h1 className="text-2xl lg:text-4xl text-black/70 font-semibold break-normal">Trusted by Leading Organizations</h1>
            <p className="text-sm lg:text-xl break-normal text-black/60 text-center font-semibold">Our 4,000+ team has expertise in almost every programming language.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-32 items-center justify-center w-full ">
            <img src="/assets/samsung.png" className="lg:h-4 h-3"/>
            <img src="/assets/microsoft.png" className="lg:h-10 h-6"/>
            <img src="/assets/google.png" className="lg:h-10 h-6"/>
            <img src="/assets/slack.png" className="lg:h-10 h-6"/>
            <img src="/assets/lg.png" className="lg:h-14 h-10"/>
            <img src="/assets/sony.png" className="lg:h-4 h-3"/>
        </div>
        <button className="bg-primary rounded-full py-2.5 text-white px-6">
        Our full repertorie
          </button>
    </div>
  )
}

export default Frame3;
