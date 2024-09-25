import { useState } from "react";
import {
    FaChevronDown,
    FaChevronRight,
    FaUserCircle,
    FaRegIdBadge
} from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import {
    PiChartPieSliceLight,
    PiShoppingBagOpen,
    PiFolder,
    PiBookOpenDuotone,
    PiUsersThreeDuotone,
    PiNotebookDuotone,
    PiChatsTeardropDuotone
} from "react-icons/pi";
import { useAuth } from "./Context";

const menus = {
    ProfileMenu: ['Overview', 'User Projects', 'Campaigns', 'Documents', 'Followers'],
    AccountMenu: ['Profile', 'Settings', 'Billing', 'Notifications', 'Security'],
    CorporateMenu: ['Company', 'Departments', 'Corporate Projects', 'Tasks', 'Calendar'],
    BlogMenu: ['Posts', 'Categories', 'Tags', 'Comments', 'Authors'],
    SocialMenu: ['Feed', 'Messages', 'Friends', 'Groups', 'Notifications 1']
};

function ExpandableMenu({ label, Icon, menuItems, activeTab, setActiveTab, isDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="cursor-pointer">
            <div
                className={`flex text-md py-2 pl-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg items-center transition-colors duration-300`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <FaChevronDown className={`text-${isDarkMode ? 'gray-400' : 'gray-500'}`} style={{ fontSize: '12px' }} />
                    ) : (
                        <FaChevronRight className={`text-${isDarkMode ? 'gray-400' : 'gray-500'}`} style={{ fontSize: '12px' }} />
                    )}
                </span>
                <Icon className={`mx-2 text-${isDarkMode ? 'gray-300' : 'gray-800'}`} style={{ fontSize: '18px' }} />
                <span className={`text-${isDarkMode ? 'gray-300' : 'gray-800'} text-md font-normal`}>{label}</span>
            </div>
            {isOpen && menuItems.map((item, index) => (
                <ul key={index} className="text-md pl-6">
                    <li
                        className={`py-2 pl-4 cursor-pointer hover:${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} rounded-lg transition-colors duration-300 ${activeTab === item ? (isDarkMode ? 'active-tab-dark' : 'active-tab') : ''}`}
                        onClick={() => setActiveTab(item)}
                    >
                        {item}
                    </li>
                </ul>
            ))}
        </li>
    );
}

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState('Default');
    const { isLeftClose, isDarkMode } = useAuth();

    const [activeTab1, setActiveTab1] = useState("Favorites");
    const [selectedItem1, setSelectedItem1] = useState("");

    const favorites = ['Overview', 'Projects'];
    const recent = ['Recent Project 1', 'Recent Project 2'];

    const handleItemClickFavRecent = (item) => {
        setSelectedItem1(item);
    };

    return (
        <div>
            <div className={`w-52 ${isLeftClose ? 'hidden' : 'block'} ${isDarkMode ? 'bg-gray-900' : 'bg-white'} h-screen p-4 text-${isDarkMode ? 'gray-300' : 'gray-900'} font-sans overflow-scroll transition-transform duration-300 md:translate-x-0 fixed md:static top-0 left-0 z-50 shadow-lg`}>
                <div className="flex items-center mb-8">
                    <FaUserCircle size={30} className={`mr-2 text-${isDarkMode ? 'gray-300' : 'gray-800'}`} />
                    <p className={`font-medium text-lg text-${isDarkMode ? 'gray-300' : 'gray-800'}`}>ByeWind</p>
                </div>

                <div className="mb-4">
                    <div className="text-gray-950 font-normal text-md font-sans">
                        <div className="mb-4 ml-2">
                            <div className="flex mb-2">
                                <button
                                    className={`mr-4 ${activeTab1 === "Favorites" ? (isDarkMode ? 'text-gray-100':"text-gray-400" ) : "text-gray-300"}`}
                                    onClick={() => setActiveTab1("Favorites")}
                                >
                                    Favorites
                                </button>
                                <button
                                    className={`${activeTab1 === "Recent" ? (isDarkMode ? 'text-gray-100':"text-gray-400" ) : "text-gray-300"}`}
                                    onClick={() => setActiveTab1("Recent")}
                                >
                                    Recent
                                </button>
                            </div>
                            <ul>
                                {(activeTab1 === "Favorites" ? favorites : recent).map((item) => (
                                    <li
                                        key={item}
                                        onClick={() => handleItemClickFavRecent(item)}
                                        className={`flex items-center text-md py-2 pl-1 cursor-pointer transition-colors duration-200 ease-in-out ${ selectedItem1 === item
                                                ? (isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black')
                                                : 'hover:bg-gray-200 text-gray-500'
                                        } rounded-lg`}
                                    >
                                        <span className={`rounded-full h-2 w-2 ${selectedItem1 === item ? (isDarkMode ? 'bg-gray-300' : 'bg-gray-700') : 'bg-gray-300'} mr-2`}></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <p className={`text-${isDarkMode ? 'gray-400' : 'gray-500'} mb-2 ml-2 text-md font-normal`}>Dashboards</p>
                    <ul>
                        {[{ label: 'Default', icon: PiChartPieSliceLight },
                          { label: 'eCommerce', icon: PiShoppingBagOpen },
                          { label: 'Projects', icon: PiFolder },
                          { label: 'Online Courses', icon: PiBookOpenDuotone }
                        ].map(({ label, icon: Icon }) => (
                            <li
                                key={label}
                                className={`flex items-center text-md py-2 pl-4 cursor-pointer transition-colors duration-300 ease-in-out ${activeTab === label ? (isDarkMode ? 'active-tab-dark' : 'active-tab') : `hover:bg-${isDarkMode ? 'gray-700' : 'gray-200'}`} rounded-lg`}
                                onClick={() => setActiveTab(label)}
                            >
                                <Icon className={`mr-2 text-${isDarkMode ? 'gray-300' : 'gray-800'}`} style={{ fontSize: '18px' }} />
                                <span className={`text-${isDarkMode ? 'gray-300' : 'gray-800'} text-md font-normal`}>{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className={`text-${isDarkMode ? 'gray-400' : 'gray-500'} mb-2 ml-2 text-md font-normal`}>Pages</p>
                    <ul>
                        <ExpandableMenu label="User Profile" Icon={FaRegIdBadge} menuItems={menus.ProfileMenu} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
                        <ExpandableMenu label="Account" Icon={HiOutlineIdentification} menuItems={menus.AccountMenu} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
                        <ExpandableMenu label="Corporate" Icon={PiUsersThreeDuotone} menuItems={menus.CorporateMenu} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
                        <ExpandableMenu label="Blog" Icon={PiNotebookDuotone} menuItems={menus.BlogMenu} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
                        <ExpandableMenu label="Social" Icon={PiChatsTeardropDuotone} menuItems={menus.SocialMenu} activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
                    </ul>
                </div>
            </div>
        </div>
    );
}
