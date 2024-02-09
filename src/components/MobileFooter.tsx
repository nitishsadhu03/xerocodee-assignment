import { Facebook, Linkedin, MoveRight, Twitter } from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="lg:hidden flex flex-col items-start mx-8 my-8 gap-8">
      <div className="flex gap-16">
        <div className="leading-loose space-y-2">
          <h1 className="text-xl text-black">Information</h1>
          <ul className="text-md text-black/60 leading-loose">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="leading-loose space-y-2">
          <h1 className="text-xl text-black">Company</h1>
          <ul className="text-md text-black/60 leading-loose">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Lift Media</li>
          </ul>
        </div>
      </div>
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
      <div className="flex flex-col gap-6 bg-[#F7F7FD] rounded-3xl mt-4 px-6 py-6 -translate-y-6">
        <h1 className="text-xl text-black">Subscribe</h1>
        <div className="flex">
          <input
            className="text-sm w-full rounded-3xl border-2 py-2 px-3"
            placeholder="Email address"
          />
          <div className="px-2 rounded-full bg-primary -translate-x-8 flex items-center justify-center">
            <MoveRight className="text-white" />
          </div>
        </div>
        <p className="text-sm text-black/60">
          Hello, we are Lift Media. Our goal is to translate the positive
          effects from revolutionizing how companies engage with their clients &
          their team.
        </p>
      </div>
      <hr className="" />
      <div className="flex flex-col items-start justify-center gap-10">
        <div>
          <ul className="flex gap-4">
            <li className="border-2 px-2 py-2 rounded-full">
              <Linkedin fill="black" />
            </li>
            <li className="border-2 px-2 py-2 rounded-full">
              <Facebook fill="black" />
            </li>
            <li className="border-2 px-2 py-2 rounded-full">
              <Twitter fill="black" />
            </li>
          </ul>
        </div>
        <div className="flex gap-6">
          <img src="/assets/logo.png" />
          <ul className="flex gap-10">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
