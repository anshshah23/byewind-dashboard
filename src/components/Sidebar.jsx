import { useState } from "react";
import {
    FaChevronDown,
    FaChevronRight,
    FaBars,
    FaUserCircle
} from "react-icons/fa";
import { FaRegIdBadge } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { PiChartPieSliceLight, PiShoppingBagOpen, PiFolder, PiBookOpenDuotone, PiUsersThreeDuotone, PiNotebookDuotone, PiChatsTeardropDuotone    
} from "react-icons/pi";
import FavRecent from "./FavRecent";

const menus = {
    ProfileMenu: ['Overview', 'User Projects', 'Campaigns', 'Documents', 'Followers'],
    AccountMenu: ['Profile', 'Settings', 'Billing', 'Notifications', 'Security'],
    CorporateMenu: ['Company', 'Departments', 'Corporate Projects', 'Tasks', 'Calendar'],
    BlogMenu: ['Posts', 'Categories', 'Tags', 'Comments', 'Authors'],
    SocialMenu: ['Feed', 'Messages', 'Friends', 'Groups', 'Notifications 1']
};

function ExpandableMenu({ label, Icon, menuItems, activeTab, setActiveTab }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className="cursor-pointer">
            <div
                className="flex text-md py-2 pl-3 hover:bg-gray-100 rounded-lg items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <FaChevronDown className="text-gray-400" style={{ fontSize: '12px' }} />
                    ) : (
                        <FaChevronRight className="text-gray-400" style={{ fontSize: '12px', fontWeight: 'lighter' }} />
                    )}
                </span>
                <Icon className="mx-2 text-gray-950" style={{ fontSize: '18px' }} />
                <span className="text-gray-950 text-md self-center font-normal">{label}</span>
            </div>
            {isOpen && menuItems.map((item, index) => (
                <ul key={index} className="text-md pl-6">
                    <li
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-100 rounded-lg ${activeTab === item ? 'active-tab' : ''
                            }`}
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Default');

    return (
        <div>
            <div className="md:hidden p-4">
                <FaBars
                    className="cursor-pointer"
                    size={30}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </div>

            <div
                className={`w-52 bg-white h-screen p-4 text-gray-950 font-sans overflow-scroll transition-transform duration-300
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static top-0 left-0 z-50`}
            >
                <div className="flex items-center mb-8">
                    <FaUserCircle size={30} className="mr-2 text-gray-950" />
                    <p className="font-medium text-lg text-gray-950">ByeWind</p>
                </div>

                <div className="mb-4">
                    <FavRecent />
                </div>

                <div className="mb-4">
                    <p className="text-gray-400 mb-2 ml-2 text-md font-normal">Dashboards</p>
                    <ul>
                        {[ 
                            { label: 'Default', icon: PiChartPieSliceLight },      // Pie chart icon
                            { label: 'eCommerce', icon: PiShoppingBagOpen }, // Shopping bag icon
                            { label: 'Projects', icon: PiFolder  },   // Folder icon
                            { label: 'Online Courses', icon: PiBookOpenDuotone  }    // Book icon
                        ].map(({ label, icon: Icon }) => (
                            <li
                                key={label}
                                className={`flex items-center text-md py-2 pl-4 cursor-pointer transition-all duration-300 ease-in-out 
                                    ${activeTab === label
                                        ? 'active-tab'
                                        : 'hover:bg-gray-100'
                                    } rounded-lg`}
                                onClick={() => setActiveTab(label)}
                            >
                                <Icon className="mr-2 text-gray-950" style={{ fontSize: '18px' }} />
                                <span className="text-gray-950 text-md font-normal">{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 mb-2 ml-2 text-md font-normal">Pages</p>
                    <ul>
                        <ExpandableMenu label="User Profile" Icon={FaRegIdBadge} menuItems={menus.ProfileMenu} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <ExpandableMenu label="Account" Icon={HiOutlineIdentification} menuItems={menus.AccountMenu} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <ExpandableMenu label="Corporate" Icon={PiUsersThreeDuotone} menuItems={menus.CorporateMenu} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <ExpandableMenu label="Blog" Icon={PiNotebookDuotone} menuItems={menus.BlogMenu} activeTab={activeTab} setActiveTab={setActiveTab} />
                        <ExpandableMenu label="Social" Icon={PiChatsTeardropDuotone} menuItems={menus.SocialMenu} activeTab={activeTab} setActiveTab={setActiveTab} />
                    </ul>
                </div>
            </div>

            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black border-l-2 opacity-50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
}
