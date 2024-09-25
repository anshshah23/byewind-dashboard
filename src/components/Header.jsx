import React from 'react'
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegBell, FaSearch } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div className='w-full h-8 px-6 text-lg  flex justify-between'>
                <div className='flex items-center gap-x-5'>
                    <LuPanelLeftClose />
                    <IoStarOutline />
                    <span >Dashboard</span>
                    <span >/</span>
                    <span >Default</span>
                </div>
                <div className='flex items-center gap-x-5'>
                    <div className="relative">
                        <FaSearch className="absolute top-3.5 left-2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-[#f8f9fb] pl-8 py-2 border rounded-lg w-15"
                        />
                    </div>
                    <GoSun />
                    <FaClockRotateLeft />
                    <FaRegBell />
                    <LuPanelRightClose />
                </div>
            </div>
        </>
    )
}