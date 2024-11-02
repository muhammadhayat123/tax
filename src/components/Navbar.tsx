"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-[#D4AF37] py-4 px-3 sm:px-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <img 
                    src="/logo.png"
                    alt="logo"
                    className="w-12 h-12 rounded-full"  // Adjusted size
                /> 
                <h1 className="text-lg sm:text-xl md:text-2xl font-serif">
                    HAYAT TAX CONSULTANT
                </h1>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="sm:hidden text-[#D4AF37] focus:outline-none">
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Links */}
            <div className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row sm:space-x-5 w-full sm:w-auto mt-4 sm:mt-0`}>
                <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 w-full">
                    <li><Link href="/" className="hover:text-white">Home</Link></li>
                    <li><Link href="/about" className="hover:text-white">About</Link></li>
                    <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
            </div>

            {/* User Links */}
            <div className={`${isOpen ? "flex" : "hidden"} sm:flex flex-col sm:flex-row sm:space-x-3 w-full sm:w-auto mt-4 sm:mt-0`}>
                <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full">
                    <li><Link href="/login" className="hover:text-white">Login</Link></li>
                    <li><Link href="/signin" className="hover:text-white">Sign In</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
