import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center py-3">
        
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            MyLogo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex mr-4 space-x-6">
          {["Home", "About", "Services", "Contact", "Dashboard"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* User Icon & Dropdown */}
        <div ref={userMenuRef} className="relative flex items-center space-x-2">
          <button
            onClick={toggleUserMenu}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition"
          >
            <FaUserCircle className="w-6 h-6" />
            <span className="hidden lg:inline-block text-sm font-medium">User Name</span>
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-50">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Profile
              </Link>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-white shadow-md border-t border-gray-200"
        >
          <div className="container max-w-7xl mx-auto px-4 lg:px-8 py-3 flex flex-col space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-700 py-2 hover:text-gray-900 transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
