import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 shadow-lg fixed w-full z-10 transition duration-500 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold tracking-wide">
          CRUD App
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to={"/"}
            className="text-white hover:text-gray-300 transition duration-500 ease-in-out transform hover:scale-110"
          >
            All Post
          </Link>
          <Link
            to={"/create"}
            className="text-white hover:text-gray-300 transition duration-500 ease-in-out transform hover:scale-110"
          >
            Create
          </Link>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 h-12 rounded-l-lg bg-white text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 ease-in-out"
              style={{ minWidth: "200px" }}
            />
            <button className="bg-blue-600 text-white h-12 px-4 rounded-r-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Burger Menu Icon (Visible on mobile) */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col items-center bg-indigo-600 text-white space-y-4 py-4 transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <Link
          to="/"
          className="hover:text-gray-300 transition duration-500 ease-in-out transform hover:scale-110"
        >
          All Post
        </Link>
        <Link
          to="/create"
          className="hover:text-gray-300 transition duration-500 ease-in-out transform hover:scale-110"
        >
          Create
        </Link>

        <div className="flex items-center w-3/4">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 h-12 rounded-l-lg bg-white text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 ease-in-out"
            style={{ minWidth: "200px" }}
          />
          <button className="bg-blue-600 text-white h-12 px-4 rounded-r-lg hover:bg-blue-700 transition duration-300 ease-in-out flex items-center">
            <FaSearch className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
