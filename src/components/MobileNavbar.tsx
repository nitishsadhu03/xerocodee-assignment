import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="lg:hidden flex justify-between items-center bg-white mx-auto sticky top-0 z-[20] px-4 py-4 font-epilogue w-full">
        <div className="">
          <img src="/assets/logo.png" />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden flex flex-col flex-wrap basis-full items-center justify-center bg-[#F7F7FD] px-2 py-2.5 rounded-md">
          <div className="flex flex-col gap-6 font-medium">
            <NavLink to="/" className=" text-primary">Home</NavLink>
            <NavLink to="/">About us</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Contact Us</NavLink>
          </div>
        </div>
      )}
    </>
  );
};
