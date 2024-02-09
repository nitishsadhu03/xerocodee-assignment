

const MobileFrame6 = () => {
  return (
    <div className="lg:hidden my-8 flex flex-col justify-center items-center gap-8">
        <div className="felx flex-col justify-center items-center">
            <div className="flex">
                <img src="/assets/person1.png" className="w-36 translate-x-4"/>
                <img src="/assets/person2.png" className="w-36 -translate-x-4"/>
            </div>
            <div className="flex">
            <img src="/assets/person3.png" className="w-36 translate-x-4"/>
            <img src="/assets/person4.png" className="w-36 -translate-x-4"/>
            </div>
            <div className="flex justify-center">
            <img src="/assets/person5.png" className="w-36"/>
            </div>
        </div>
        <h1 className="text-2xl font-semibold font-epilogue text-black/70">Let's Form Your Crew.</h1>
        <button className="bg-primary rounded-full py-2.5 text-white px-6 font-epilogue ">
            Schedule a Call
          </button>
    </div>
  )
}

export default MobileFrame6