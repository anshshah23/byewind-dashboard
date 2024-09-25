import React from 'react'
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from './Context';

export default function Header() {
    const { setIsLeftClose, setIsRightClose, isLeftClose, isRightClose, isDarkMode, setIsDarkMode } = useAuth();
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <>
            <div className={`w-full h-8 px-6 text-lg border-b-2 p-8 flex justify-between 
                ${isDarkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-300 text-black'}`}>
                <div className='flex items-center gap-x-5'>
                    <LuPanelLeftClose onClick={() => { setIsLeftClose(!isLeftClose) }} />
                    <IoStarOutline />
                    <span>
                        <Link to='/' className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Dashboard</Link>
                    </span>
                    <span >/</span>
                    <span>Default</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div className="relative">
                        <FaSearch className={`absolute top-3.5 left-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`} />
                        <input
                            type="text"
                            placeholder="Search"
                            className={`pl-8 py-2 border rounded-lg w-15 
                                ${isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-[#f8f9fb] text-black border-gray-300'}`}
                        />
                    </div>
                    <GoSun onClick={toggleDarkMode} className="cursor-pointer" />
                    <FaClockRotateLeft />
                    <FaRegBell />
                    <LuPanelRightClose onClick={() => { setIsRightClose(!isRightClose) }} />
                </div>
            </div>
        </>
    )
}
