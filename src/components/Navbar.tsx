import { NavLink } from "react-router-dom";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  return (
    <>
      <nav className="hidden lg:flex justify-between items-center bg-white mx-auto sticky top-0 z-[20] px-4 py-4 font-epilogue w-full">
        <div className="">
          <img src="/assets/logo.png" />
        </div>
        <div className="flex items-center justify-center bg-[#F7F7FD] px-8 py-2.5 rounded-full">
          <div className="flex gap-20 font-medium">
            <NavLink to="/" className=" text-primary">
              Home
            </NavLink>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Contact Us</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-3.5">
          <select className="h-full px-4 py-2.5">
            <option value="english">EN</option>
            <option value="spanish">SP</option>
          </select>
          <button className="bg-primary rounded-full py-2.5 text-white px-6">
            Schedule a Call
          </button>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
};
