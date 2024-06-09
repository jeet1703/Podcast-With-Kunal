import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black sticky top-0 z-[20] flex flex-col md:flex-row md:justify-between md:items-center mx-auto w-full px-4 py-2'>
      <div className="flex justify-between items-center w-full md:w-auto">
        <Logo />
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <Nav isOpen={isOpen} />
    </div>
  );
};

const Navlinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 items-center mt-2 md:mt-0">
      <NavLink to="/" className="text-white py-2 px-4 hover:text-yellow-500 hover:bg-gray-900 rounded">Home</NavLink>
      <NavLink to="/Episode" className="text-white py-2 px-4 hover:text-yellow-500 hover:bg-gray-900 rounded">Episode</NavLink>
      <NavLink to="/Blogs" className="text-white py-2 px-4 hover:text-yellow-500 hover:bg-gray-900 rounded">Blogs</NavLink>
      <NavLink to="/subscribe" className="text-white py-2 px-4 hover:text-yellow-500 hover:bg-gray-900 rounded">Subscribe</NavLink>
    </div>
  );
};

const Nav = ({ isOpen }) => {
  return (
    <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:flex md:justify-end md:items-center md:me-24`}>
      <Navlinks />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex-shrink-0 md:ml-20 ml-10">
      <img className="w-20 h-auto " src='/logo.png' alt="React Logo" />
    </div>
  );
};

export default Navbar;
