import { ComputerIcon, FileCode, Monitor } from "lucide-react"


const Frame1 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 font-epilogue mt-8 mb-8 mx-5 lg:mx-10">
        <h1 className="text-2xl font-semibold lg:text-4xl text-black/70">We have multidisciplinary teams to meet any <span className="text-primary">challenge.</span></h1>
        <div className="flex flex-col lg:flex-row justify-center items-center mx-2 lg:mx-12 px-8 py-8 gap-10 my-10 shadow-xl rounded-3xl">
            <div className="flex flex-col gap-5 px-1 lg:px-8">
            <Monitor className="text-primary size-12" />
            <h1 className="text-2xl text-black/70 font-semibold">Front-end</h1>
            <p className="text-md text-black/60">Our frontend developers understand the delicate balance between aesthetics and functionality.</p>
            </div>
            <div className="flex flex-col gap-5 px-1 lg:px-8">
            <FileCode className="text-primary size-12" />
            <h1 className="text-2xl text-black/70 font-semibold">Back-end</h1>
            <p className="text-md text-black/60">Our backend developers are the architects of efficiency and security. They design and build the databases andAPIs.</p>
            </div>
            <div className="flex flex-col gap-5 px-1 lg:px-8">
            <ComputerIcon className="text-primary size-12"/>
            <h1 className="text-2xl text-black/70 font-semibold">Data Analysts</h1>
            <p className="text-md text-black/60">Our data analytics team is a blend of mathematicians, statisticians, and technology enthusiasts.</p>
            </div>
        </div>
    </div>
  )
}

export default Frame1