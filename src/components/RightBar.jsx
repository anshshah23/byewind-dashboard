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
    const { isRightClose, setIsRightClose } = useAuth();

    return (
        <div className={`${isRightClose ? 'hidden' : 'block'}  w-80 bg-white h-screen p-4 text-gray-700 font-sans overflow-scroll`}>
            {/* Notifications Section */}
            <div>
                <h2 className="font-bold text-md mb-2">Notifications</h2>
                <ul>
                    {notifications.map((notif, index) => (
                        <li key={index} className="flex items-center justify-start mb-4">
                            {notif.type === "bug" && <div className="p-1 rounded-full bg-gray-300 mr-2">
                                <PiBugBeetle className="bg-gray-300 text-gray-950" style={{ fontSize: '18px' }} />
                            </div>}
                            {notif.type === "user" && <div className="p-1 rounded-full bg-gray-300 mr-2">
                                <PiUser className="bg-gray-300 text-gray-950" style={{ fontSize: '18px' }} />
                            </div>}
                            {notif.type === "subscribe" &&
                                <div className="p-1 rounded-full bg-gray-300 mr-2">
                                    <PiBroadcast className="bg-gray-300 text-gray-950" style={{ fontSize: '18px' }} />
                                </div>}
                            <div className="">
                                <p className="text-xs">{notif.message}</p>
                                <p className="text-xs text-gray-400">{notif.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* You can add similar sections for Activities and Contacts */}
            <div>
                <h2 className="font-bold text-md mb-2">Activities</h2>
                <ul>
                    <li className="flex items-center justify-start mb-4">
                        <div className="p-1 rounded-full bg-gray-300 mr-2">
                            <PiBugBeetle className="bg-gray-300 text-gray-950" style={{ fontSize: '18px' }} />
                        </div>
                        <div className="">
                            <p className="text-xs">You have a bug that needs ...</p>
                            <p className="text-xs text-gray-400">Just now</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-md mb-2">Contacts</h2>
                <ul>
                    <li className="flex items-center justify-start mb-4">
                        <div className="p-1 rounded-full bg-gray-300 mr-2">
                            <PiUser className="bg-gray-300 text-gray-950" style={{ fontSize: '18px' }} />
                        </div>
                        <div className="">
                            <p className="text-xs">New user registered</p>
                            <p className="text-xs text-gray-400">59 minutes ago</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
