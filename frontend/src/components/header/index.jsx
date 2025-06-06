// Header.jsx
import { useState } from "react";
import { Bell, User } from "lucide-react";
import useLayoutStore from './../../store/layout-control/index';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="mt-[10px] fixed left-[20px] right-[20px] rounded-[50px] py-2 px-[20px] flex justify-between items-center bg-[#093f9f] backdrop-blur-2xl z-50">
      {/* Logo yoki boshqa elementi */}
      <NavLink to="/">
        <img
          className="image-shadow"
          width={50}
          src="/logo.svg"
          alt="logo"
        />
      </NavLink>
      {/* Header options */}
      <div className="flex items-center space-x-6">
        {/* Notification icon */}
        <div className="relative">
          <Bell className="text-white" size={24} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex justify-center items-center">
            3
          </span>
        </div>

        {/* User avatar */}
        <div className="relative">
          <button onClick={toggleDropdown}>
            <User className="text-white" size={24} />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white p-2 shadow-lg rounded-lg w-40">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-200">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-200">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
