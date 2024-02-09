

const Frame6 = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center my-24 gap-12">
        <div className="flex flex-row justify-center items-center">
          <img src="/assets/vector2.svg" className="translate-x-44"/>
        <img src="/assets/person1.png" className="translate-x-32 z-0"/>
        <img src="/assets/person2.png" className="z-0 translate-x-16"/>
        <img src="/assets/person3.png" className="z-0"/>
        <img src="/assets/person4.png" className="z-0 -translate-x-16"/>
        <img src="/assets/person5.png" className="z-10 -translate-x-32"/>
        <img src="/assets/vector1.svg" className="-translate-x-44"/>
        </div>
        <h1 className="text-4xl font-semibold font-epilogue text-black/70">Let's Form Your Crew.</h1>
        <button className="bg-primary text-lg rounded-full py-2.5 text-white px-6 font-epilogue ">
            Schedule a Call
          </button>
    </div>
  )
}

export default Frame6