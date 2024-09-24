import { useState } from "react";
import {
  FaUserCircle,
  FaShoppingCart,
  FaFolderOpen,
  FaGraduationCap,
  FaUserAlt,
  FaBuilding,
  FaBlog,
  FaCommentDots,
  FaChevronDown,
  FaChevronRight
} from "react-icons/fa";

export default function Sidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="w-64 bg-white h-screen p-4 text-gray-700 font-sans overflow-scroll">
      {/* Profile and Title */}
      <div className="flex items-center mb-8">
        <FaUserCircle size={40} className="mr-2" />
        <div>
          <p className="font-bold text-lg">ByeWind</p>
          <p className="text-gray-400 text-sm">Favorites</p>
        </div>
      </div>

      {/* Favorites */}
      <div className="mb-4">
        <p className="text-gray-400 mb-2">Favorites</p>
        <ul>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer hover:text-gray-900">
            <span className="rounded-full h-2 w-2 bg-gray-500 mr-2"></span> Overview
          </li>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer hover:text-gray-900">
            <span className="rounded-full h-2 w-2 bg-gray-500 mr-2"></span> Projects
          </li>
        </ul>
      </div>

      {/* Dashboards */}
      <div className="mb-4">
        <p className="text-gray-400 mb-2">Dashboards</p>
        <ul>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer bg-gray-100 rounded-lg">
            <FaGraduationCap className="mr-2" /> Default
          </li>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer hover:bg-gray-100 rounded-lg">
            <FaShoppingCart className="mr-2" /> eCommerce
          </li>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer hover:bg-gray-100 rounded-lg">
            <FaFolderOpen className="mr-2" /> Projects
          </li>
          <li className="flex items-center text-sm py-2 pl-4 cursor-pointer hover:bg-gray-100 rounded-lg">
            <FaGraduationCap className="mr-2" /> Online Courses
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div>
        <p className="text-gray-400 mb-2">Pages</p>
        <ul>
          <li className="cursor-pointer">
            <div
              className="flex items-center text-sm py-2 pl-4 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FaUserAlt className="mr-2" />
              User Profile
              <span className="ml-auto">
                {isProfileOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>
            {isProfileOpen && (
              <ul className="ml-8 mt-2 text-gray-600">
                <li className="py-1 cursor-pointer hover:text-gray-900">Overview</li>
                <li className="py-1 cursor-pointer hover:text-gray-900">Projects</li>
                <li className="py-1 cursor-pointer hover:text-gray-900">Campaigns</li>
                <li className="py-1 cursor-pointer hover:text-gray-900">Documents</li>
                <li className="py-1 cursor-pointer hover:text-gray-900">Followers</li>
              </ul>
            )}
          </li>
          <li className="flex items-center text-sm py-2 pl-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaUserAlt className="mr-2" /> Account
          </li>
          <li className="flex items-center text-sm py-2 pl-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaBuilding className="mr-2" /> Corporate
          </li>
          <li className="flex items-center text-sm py-2 pl-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaBlog className="mr-2" /> Blog
          </li>
          <li className="flex items-center text-sm py-2 pl-4 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaCommentDots className="mr-2" /> Social
          </li>
        </ul>
      </div>
    </div>
  );
}
