import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 mx-auto w-[90vw] rounded-full mt-7 h-[8vh] flex justify-between items-center px-4 sm:px-8 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://orflaxindia.com/wp-content/uploads/2023/08/oipl-removebg-preview-208x74.png"
          className="h-[40px] sm:h-[50px] md:h-[60px]"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex text-white items-center space-x-8 lg:space-x-14">
        <ul className="flex space-x-6 sm:space-x-8">
          {['Home', 'About', "Director's Page", 'Products', 'Gallery', 'Contact'].map((text, index) => (
            <li key={index} className="relative group">
              <Link
                to={text === 'Home' ? '/' : text === "Director's Page" ? '/director_page' : `/${text.toLowerCase().replace(' ', '_')}`}
                className="relative z-10 px-3 py-1 md:px-4 md:py-2 rounded-lg transition-all duration-300"
              >
                {text}
              </Link>
              {/* Background color and shadow effect */}
              <span className="absolute inset-0 flex justify-center items-center">
                <span className="w-0 h-0 bg-gray-700 bg-opacity-50 rounded-full shadow-lg transition-all duration-300 group-hover:w-full group-hover:h-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call Me Button */}
      <div className="flex items-center">
        <a href="tel:011-41523405" className="relative inline-block px-6 py-2 sm:px-8 sm:py-3 overflow-hidden font-bold rounded-full group">      
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 flex items-center gap-3">Call Me</span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
