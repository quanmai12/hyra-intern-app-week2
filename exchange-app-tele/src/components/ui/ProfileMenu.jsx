import { useState, useEffect, useRef } from "react";
import { LogOut, Settings, User, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar - Khi nhấn vào sẽ mở menu */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        <img
          src="../../../img/avata.png"
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-gray-400"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 top-full mt-2 w-56 bg-[#262626] shadow-lg rounded-lg p-3 z-50 transform -translate-x-1/2"
          >
          {/* Thông tin user */}
          <div className="flex items-center space-x-3 border-b border-gray-600 pb-2">
            <img
              src="../../../img/avata.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-white font-semibold text-sm">Sajibur Rahman</p>
              <p className="text-gray-400 text-xs">sajibur@email.com</p>
            </div>
          </div>

          {/* Các tùy chọn menu */}
          <ul className="mt-2 text-gray-300 text-sm">
            <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
              <User className="w-5 h-5 mr-2 text-blue-400" /> My Profile
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
              <Wallet className="w-5 h-5 mr-2 text-green-400" /> My Wallet
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 rounded cursor-pointer">
              <Settings className="w-5 h-5 mr-2 text-yellow-400" /> Settings
            </li>
            <li className="flex items-center p-2 hover:bg-red-600 rounded cursor-pointer text-red-400 mt-1">
              <LogOut className="w-5 h-5 mr-2" /> Sign Out
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileMenu;
