import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";
import ProfileMenu from "../ui/ProfileMenu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Đóng dropdown khi click bên ngoài
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full shadow-md z-50 flex items-center justify-between bg-[#262626] p-4 ">
            {/* Thông tin user */}
            <div className="flex items-center space-x-3">
                <ProfileMenu />
                <div>
                    <p className="text-gray-200 text-sm">Hello, Sajibur 👋</p>
                    <p className="text-white font-medium">Welcome Back</p>
                </div>
            </div>
            <div className="w-12 h-12 bg-gray-600/30 rounded-full hidden md:flex"></div>
            {/* Icon chuông + Dropdown */}
            <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                {/* Nút chuông thông báo */}
                <button onClick={() => setIsOpen(!isOpen)}
                    className="relative p-2 bg-[#383838] rounded-full bg-[#353535] transition">
                    <Bell className="text-gray-300 w-6 h-6" />
                    <span className="absolute -top-1 -right-1 bg-lime-400 min-w-[18px] h-5 text-xs flex items-center justify-center rounded-full text-black font-bold">
                        2
                    </span>
                </button>

                {/* Dropdown thông báo với animation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-full mt-2 w-56 bg-[#262626] shadow-lg rounded-lg p-3 z-[60]"
                    >
                        <p className="text-white font-semibold text-sm">Notifications</p>
                        <ul className="mt-2 text-gray-300 text-sm space-y-2">
                            <li className="py-2 border-b border-gray-600">
                                🔔 Bạn có một giao dịch mới!
                            </li>
                            <li className="py-2 border-b border-gray-600">
                                🔔 Thanh toán của bạn đã hoàn tất.
                            </li>
                        </ul>
                        <button className="w-full text-center text-lime-400 mt-2 text-sm hover:underline">
                            Xem tất cả
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Header;
