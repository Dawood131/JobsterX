import { NavLink } from "react-router-dom";
import { X, FileText } from "lucide-react";
import { FiLogOut } from "react-icons/fi";
import { PiMedalMilitaryBold } from "react-icons/pi";

const menuLinks = [
  { to: "/about", label: "Lorem Ipsum" },
  { to: "/home", label: "Lorem Ipsum" },
  { to: "/", label: "Build your Resume" },
  { to: "/contact", label: "Lorem Ipsum" },
  { to: "/sec", label: "Lorem Ipsum" },
  { to: "/oj", label: "Lorem Ipsum" },
];

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-70 bg-white shadow-lg z-40 transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}>
      <div className="flex items-center justify-between p-4 bg-white  flex-shrink-0">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain" />
        </div>
        <button
          onClick={onToggle}
          className="md:hidden text-gray-700 p-1 rounded-md hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close sidebar">
          <X size={24} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Profile Section */}
        <div className="space-y-3">
          <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto" />
          <h2 className="text-xl font-bold text-center mt-2">Sameer Saleem</h2>
          <p className="text-sm text-center text-gray-500">sameer@jobsterx.com</p>

          <div className="flex justify-center gap-2 mt-2">
            <span className="px-3 py-1 text-xs font-semibold bg-[#4361EE] hover:bg-[#2046f0] cursor-pointer text-white rounded-full flex items-center">
              Premium
            </span>
            <span className="px-2 py-1 text-xs border border-gray-300 rounded-full cursor-pointer">
              Level Professional
            </span>
          </div>
        </div>
        {/* Progress Bars */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-xs text-gray-800">Profile</p>
              <span className="text-xs font-semibold text-[#4361EE]">85%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] h-2 rounded" style={{ width: "85%" }} />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-xs text-gray-800">Next Level</p>
              <span className="text-xs font-semibold text-[#4361EE]">Expert</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-gradient-to-r from-[#3A0CA3] to-[#7209B7] h-2 rounded w-2/3" />
            </div>
          </div>

          {/* Activity Status */}
          <div className="mt-2 text-center">
            <NavLink
              to="/activity"
              className={({ isActive }) =>
                `text-xs font-medium hover:underline ${isActive ? "text-white bg-[#3A0CA3] px-2 py-1 rounded" : "text-[#3A0CA3]"
                }`
              }
            >
              Activity Status
            </NavLink>
          </div>
          <div className="border-t border-gray-400 w-11/12 mx-auto mt-2" />
        </div>
        {/* Menu Links */}
        <nav className="space-y-2">
          {menuLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg ${isActive ? "bg-[#3A0CA3] text-white" : "hover:bg-purple-200"
                }`
              }
            >
              <FileText size={18} /> <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-4 space-y-2 text-center">
          <button className="w-full flex justify-between items-center px-4 py-2 bg-[#3A0CA3] text-white rounded-lg hover:bg-[#4209c7]">
            <span className="flex items-center gap-1">
              <PiMedalMilitaryBold /> Streak
            </span>
            <span className="text-sm font-semibold">7 days</span>
          </button>
          <p className="text-xs text-gray-500">Member since Jan 2024</p>
          <NavLink
            to="/logout"
            className="flex items-center justify-center gap-1 text-xs font-medium text-red-600 hover:underline mx-auto px-2 py-1 rounded">
            <FiLogOut /> Sign Out
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
