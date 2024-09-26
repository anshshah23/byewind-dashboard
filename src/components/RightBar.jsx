import { motion } from "framer-motion";
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

    // Animation variants
    const sidebarVariants = {
        open: { width: '20rem', opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
        closed: { width: '0rem', opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const notificationVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1, // Stagger effect
                duration: 0.2,
                ease: "easeInOut"
            }
        })
    };

    const contactsData = [
        { user: 'Natali Craig' },
        { user: 'Drew Cano' },
        { user: 'Orlando Diggs' },
        { user: 'Andi Lane' },
        { user: 'Kate Morrison' },
        { user: 'Koray Occumos' },
    ];

    return (
        <motion.div
            variants={sidebarVariants}
            initial="closed"
            animate={isRightClose ? "closed" : "open"}
            className={`h-screen font-sans overflow-hidden
                ${isDarkMode ? 'bg-zinc-900 text-zinc-300 fade-in' : 'bg-white text-zinc-700 fade-out'}`}
        >
            <div className="p-4">
                <div>
                    <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-zinc-100 fade-in' : 'text-zinc-900 fade-out'}`}>Notifications</h2>
                    <ul>
                        {notifications.map((notif, index) => (
                            <motion.li
                                key={index}
                                variants={notificationVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                className="flex items-center justify-start mb-4"
                            >
                                {notif.type === "bug" && (
                                    <div className={`p-1 rounded-full ${isDarkMode ? 'bg-red-600/20 fade-in' : 'bg-red-200/50 fade-out'} mr-2`}>
                                        <PiBugBeetle className={`${isDarkMode ? 'text-red-400 fade-in' : 'text-red-600 fade-out'}`} style={{ fontSize: '18px' }} />
                                    </div>
                                )}
                                {notif.type === "user" && (
                                    <div className={`p-1 rounded-full ${isDarkMode ? 'bg-blue-600/20 fade-in' : 'bg-blue-200/50 fade-out'} mr-2`}>
                                        <PiUser className={`${isDarkMode ? 'text-blue-400 fade-in' : 'text-blue-600 fade-out'}`} style={{ fontSize: '18px' }} />
                                    </div>
                                )}
                                {notif.type === "subscribe" && (
                                    <div className={`p-1 rounded-full ${isDarkMode ? 'bg-green-600/20 fade-in' : 'bg-green-200/50 fade-out'} mr-2`}>
                                        <PiBroadcast className={`${isDarkMode ? 'text-green-400 fade-in' : 'text-green-600 fade-out'}`} style={{ fontSize: '18px' }} />
                                    </div>
                                )}
                                <div className="">
                                    <p className="text-xs">{notif.message}</p>
                                    <p className={`text-xs ${isDarkMode ? 'text-zinc-400 fade-in' : 'text-zinc-500 fade-out'}`}>{notif.time}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-zinc-100 fade-in' : 'text-zinc-900 fade-out'}`}>Activities</h2>
                    <ul>
                        <li className="flex items-center justify-start mb-4">
                            <div className={`p-1 rounded-full ${isDarkMode ? 'bg-yellow-600/20 fade-in' : 'bg-yellow-200/50 fade-out'} mr-2`}>
                                <PiBugBeetle className={`${isDarkMode ? 'text-yellow-400 fade-in' : 'text-yellow-600 fade-out'}`} style={{ fontSize: '18px' }} />
                            </div>
                            <div className="">
                                <p className="text-xs">You have a bug that needs ...</p>
                                <p className={`text-xs ${isDarkMode ? 'text-zinc-400 fade-in' : 'text-zinc-500 fade-out'}`}>Just now</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className={`font-bold text-md mb-2 ${isDarkMode ? 'text-zinc-100 fade-in' : 'text-zinc-900 fade-out'}`}>Contacts</h2>
                    <ul>
                        {contactsData.map((contact, index) => (
                            <motion.li
                                key={index}
                                variants={notificationVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                                className="flex items-center justify-start mb-3"
                            >
                                <div className={`rounded-full ${isDarkMode ? 'bg-purple-600/20 fade-in' : 'bg-purple-200/50 fade-out'} mr-2`}>
                                    <img
                                        src={`https://i.pravatar.cc/30?img=${index + 20}`}
                                        alt="avatar"
                                        className="w-6 h-6 rounded-full"
                                    />
                                </div>
                                <div className="">
                                    <p className="text-sm">{contact.user}</p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
