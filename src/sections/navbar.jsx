import React, { useState } from "react";
import { Link } from "react-scroll";
import { whiteLogo } from "../assets";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Full width background overlay for large screens */}
      <div className="absolute inset-0 bg-black opacity-30 hidden md:block pointer-events-none"></div>

      {/* Full width background overlay for mobile view */}
      <div
        className={`absolute inset-0 bg-black opacity-50 md:hidden ${
          isOpen ? "" : "pointer-events-none"
        }`}
      ></div>

      <div className="relative mx-auto flex h-14 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div>
          <img src={whiteLogo} alt="Logo" className="h-16 py-2 w-auto" />
        </div>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          {/* Desktop Nav */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center text-white gap-6 text-sm">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="about-me"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  ABOUT ME
                </Link>
              </li>
              <li>
                <Link
                  to="music"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link
                  to="see-me-live"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  SEE ME LIVE
                </Link>
              </li>
              <li>
                <Link
                  to="my-initiatives"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  MY INITIATIVES
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  className="font-bold transition hover:text-gray-500/75"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Social media Buttons */}
            <div className="flex flex-row sm:flex-row sm:gap-4 gap-2 items-center">
              <a
                href="https://www.instagram.com/susan_augustt/"
                target="_blank"
                className="text-white"
              >
                <Instagram size={20}/>
              </a>
              <a
                href="https://twitter.com/susan_augustt"
                target="_blank"
                className="text-white"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://web.facebook.com/"
                target="_blank"
                className="text-white"
              >
                <FaFacebook size={20} />
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block p-2.5 text-white transition hover:bg-opacity-75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 text-white flex flex-col items-center py-4 z-50">
          {/* Mobile Menu Links */}
          <ul className="flex flex-col items-center gap-4 text-center">
            <li>
              <Link
                to="home"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="about-me"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link
                to="music"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                to="see-me-live"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                SEE ME LIVE
              </Link>
            </li>
            <li>
              <Link
                to="my-initiatives"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                MY INITIATIVES
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                className="font-bold transition hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
