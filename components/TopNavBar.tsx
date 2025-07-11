'use client'

import { FaUserCircle, FaBars } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';

export default function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-red-600 text-white shadow-md max-w-full ">
            <div className="flex items-center justify-between px-2 py-6 md:px-8">
                {/* Left Section: Logo & Location Selector */}
                <div className="flex items-center sm:gap-4">
                    {/* <button className="text-xl md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <FaBars />
                    </button> */}
                    <h1 className="text-lg md:text-xl font-bold tracking-wide">MyTeacherApp</h1>
                    <div className="md:block text-xs pl-2">
                        <select className=" bg-red-800 text-white font-medium px-3 py-1 rounded-md focus:outline-none focus:ring">
                            <option>Richmond Hill</option>
                        </select>
                    </div>
                </div>

                {/* Right Section: User Avatar & Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-1">
                        <span className="hidden md:block text-sm sm:text-lg font-medium">Alynia Allan</span>
                        <FaUserCircle className="text-2xl cursor-pointer" />
                    </div>
                    <button className="hover:text-gray-200 cursor-pointer" title="Logout">
                        <FiLogOut className="text-xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};