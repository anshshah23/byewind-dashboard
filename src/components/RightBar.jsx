import { div } from "framer-motion/client";
import { useState } from "react";
import { PiBugBeetle, PiUser, PiBroadcast } from "react-icons/pi";
import { useAuth } from "./Context";

const notifications = [
    { type: "bug", message: "You have a bug that needs ...", time: "Just now" },
    { type: "user", message: "New user registered", time: "59 minutes ago" },
    { type: "bug", message: "You have a bug that needs ...", time: "12 hours ago" },
    { type: "subscribe", message: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

export default function Sidebar() {
    const { isRightClose, setIsRightClose, isDarkMode } = useAuth();

    return (
        <div className={`${isRightClose ? 'hidden' : 'block'} w-80 h-screen p-4 font-sans overflow-scroll 
            ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'}`}>
            {/* Notifications Section */}
            <div>
                <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Notifications</h2>
                <ul>
                    {notifications.map((notif, index) => (
                        <li key={index} className="flex items-center justify-start mb-4">
                            {notif.type === "bug" && (
                                <div className={`p-1 rounded-full ${isDarkMode ? 'bg-red-600/20' : 'bg-red-200/50'} mr-2`}>
                                    <PiBugBeetle className={`${isDarkMode ? 'text-red-400' : 'text-red-600'}`} style={{ fontSize: '18px' }} />
                                </div>
                            )}
                            {notif.type === "user" && (
                                <div className={`p-1 rounded-full ${isDarkMode ? 'bg-blue-600/20' : 'bg-blue-200/50'} mr-2`}>
                                    <PiUser className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} style={{ fontSize: '18px' }} />
                                </div>
                            )}
                            {notif.type === "subscribe" && (
                                <div className={`p-1 rounded-full ${isDarkMode ? 'bg-green-600/20' : 'bg-green-200/50'} mr-2`}>
                                    <PiBroadcast className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`} style={{ fontSize: '18px' }} />
                                </div>
                            )}
                            <div className="">
                                <p className="text-xs">{notif.message}</p>
                                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{notif.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Activities Section */}
            <div>
                <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Activities</h2>
                <ul>
                    <li className="flex items-center justify-start mb-4">
                        <div className={`p-1 rounded-full ${isDarkMode ? 'bg-yellow-600/20' : 'bg-yellow-200/50'} mr-2`}>
                            <PiBugBeetle className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} style={{ fontSize: '18px' }} />
                        </div>
                        <div className="">
                            <p className="text-xs">You have a bug that needs ...</p>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Just now</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Contacts Section */}
            <div>
                <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Contacts</h2>
                <ul>
                    <li className="flex items-center justify-start mb-4">
                        <div className={`p-1 rounded-full ${isDarkMode ? 'bg-purple-600/20' : 'bg-purple-200/50'} mr-2`}>
                            <PiUser className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} style={{ fontSize: '18px' }} />
                        </div>
                        <div className="">
                            <p className="text-xs">New user registered</p>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>59 minutes ago</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
