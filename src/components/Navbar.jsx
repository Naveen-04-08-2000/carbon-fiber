import { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="!bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
             {/* Mobile menu button */}
             <button
                onClick={toggleMenu}
                className="md:hidden ml-2 p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-5">
                  <span className={`absolute top-1/2 left-0 h-[2px] w-6 bg-white transform transition-all duration-500 ease-in-out ${
                    isOpen ? 'rotate-[135deg]' : '-translate-y-2'
                  }`}></span>
                  
                  <span className={`absolute top-1/2 left-0 h-[2px] w-6 bg-white transform transition-all duration-500 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  
                  <span className={`absolute top-1/2 left-0 h-[2px] w-6 bg-white transform transition-all duration-500 ease-in-out ${
                    isOpen ? '-rotate-[135deg]' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
              
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="flex items-center">
                <img className="h-[2.5rem] w-[2.5rem]" src={logo} alt="Company Logo" />
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <span className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                Home
              </span>
              <span className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                Products
              </span>
              <span className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                Services
              </span>
              <span className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                About
              </span>
              <span className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium">
                Contact Us
              </span>
            </div>

            {/* Cart Icon */}
            <div className="flex items-center">
              <span className="text-white hover:text-blue-400 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
              Home
            </span>
            <span className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
              Products
            </span>
            <span className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
              Services
            </span>
            <span className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
              About
            </span>
            <span className="block text-white hover:text-blue-400 px-3 py-2 text-base font-medium">
              Contact Us
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
