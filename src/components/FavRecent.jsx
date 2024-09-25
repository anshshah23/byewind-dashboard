import { useState } from "react";

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState("Favorites");
    const [selectedItem, setSelectedItem] = useState("");

    const favorites = ['Overview', 'Projects'];
    const recent = ['Recent Project 1', 'Recent Project 2'];

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="text-gray-950 font-normal text-md font-sans">
            <div className="mb-4 ml-2">
                <div className="flex mb-2">
                    <button
                        className={`mr-4 ${activeTab === "Favorites" ? "text-gray-400" : "text-gray-300"}`}
                        onClick={() => setActiveTab("Favorites")}
                    >
                        Favorites
                    </button>
                    <button
                        className={`${activeTab === "Recent" ? "text-gray-400" : "text-gray-300"}`}
                        onClick={() => setActiveTab("Recent")}
                    >
                        Recent
                    </button>
                </div>
                <ul>
                    {(activeTab === "Favorites" ? favorites : recent).map((item) => (
                        <li
                            key={item}
                            onClick={() => handleItemClick(item)}
                            className={`flex items-center text-md py-2 pl-1 cursor-pointer transition-colors duration-200 ease-in-out ${
                                selectedItem === item
                                    ? 'bg-gray-100'
                                    : 'hover:bg-gray-100 text-gray-500'
                            } rounded-lg`}
                        >
                            <span className={`rounded-full h-2 w-2 bg-gray-300 mr-2 ${
                                selectedItem === item
                                    ? 'bg-gray-950'
                                    : ''
                            } rounded-lg`}></span> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
