import React from 'react';
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from './Context';

export default function Header() {
    const { setIsLeftClose, setIsRightClose, isLeftClose, isRightClose, isDarkMode, setIsDarkMode } = useAuth();
    const [fade, setFade] = React.useState(false);

    const toggleDarkMode = () => {
        setFade(true);
        setTimeout(() => {
            setIsDarkMode(!isDarkMode);
            setFade(false);
        }, 300);
    };

    return (
        <div className={`w-full h-8 px-6 text-lg border-b-2 p-8 flex justify-between 
            ${isDarkMode ? 'bg-zinc-900 border-zinc-700 text-white fade-in' : 'bg-white border-zinc-300 text-black fade-out'} 
            ${fade ? 'fade-out' : ''}`}>
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
                    <FaSearch className={`absolute top-3.5 left-2 ${isDarkMode ? 'text-zinc-300 fade-in' : 'text-zinc-400 fade-out'}`} />
                    <input
                        type="text"
                        placeholder="Search"
                        className={`pl-8 py-2 border rounded-lg w-15 
                            ${isDarkMode ? 'bg-zinc-800 text-white border-zinc-600 fade-in' : 'bg-[#f8f9fb] text-black border-zinc-300 fade-out'}`}
                    />
                </div>
                {
                    isDarkMode ? <GoSun onClick={toggleDarkMode} className="cursor-pointer" /> :
                    <FaRegMoon onClick={toggleDarkMode} className="cursor-pointer" />
                }
                <FaClockRotateLeft />
                <FaRegBell />
                <LuPanelRightClose onClick={() => { setIsRightClose(!isRightClose) }} />
            </div>
        </div>
    );
}
