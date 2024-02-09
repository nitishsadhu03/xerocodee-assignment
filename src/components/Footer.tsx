import { Facebook, Linkedin, MoveRight, Twitter } from "lucide-react"


const Footer = () => {
  return (
    <div className="hidden lg:flex flex-col mx-32 my-12 font-epilogue">
        <div className="flex flex-row gap-10 items-start justify-between">
            <div className="leading-loose space-y-4">
                <h1 className="text-xl text-black">Product</h1>
                <ul className="text-md text-black/60">
                    <li>Employee database</li>
                    <li>Payroll</li>
                    <li>Absences</li>
                    <li>Time tracking</li>
                    <li>Shift planner</li>
                    <li>Recruiting</li>
                </ul>
            </div>
            <div className="leading-loose space-y-4">
                <h1 className="text-xl text-black">Information</h1>
                <ul className="text-md text-black/60">
                    <li>FAQ</li>
                    <li>Blog</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="leading-loose space-y-4">
                <h1 className="text-xl text-black">Company</h1>
                <ul className="text-md text-black/60">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Lift Media</li>
                </ul>
            </div>
            <div className="flex flex-col gap-6 w-96 bg-[#F7F7FD] rounded-3xl px-10 pt-6 pb-10 -translate-y-6">
                <h1 className="text-xl text-black">Subscribe</h1>
                <div className="flex">
                    <input className="w-full text-sm rounded-3xl border-2 px-3" placeholder="Email address"/>
                    <div className="h-10 w-12 rounded-full bg-primary -translate-x-8 flex items-center justify-center">
                    <MoveRight className="text-white" />
                    </div>
                </div>
                <p className="text-sm text-black/60">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
            </div>
        </div>
        <hr className="my-8"/>
        <div className="flex items-center justify-between gap-10">
            <div>
                <img src="/assets/logo.png"/>
            </div>
            <div >
                <ul className="flex gap-10">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li className="border-2 px-3 py-3 rounded-full"><Linkedin fill="black"/></li>
                    <li className="border-2 px-3 py-3 rounded-full"><Facebook fill="black"/></li>
                    <li className="border-2 px-3 py-3 rounded-full"><Twitter fill="black"/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer