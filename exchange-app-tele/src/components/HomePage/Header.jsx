import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <img src="/avatar.png" alt="User" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-gray-300 text-sm">Hello, Sajibur 👋</p>
          <p className="text-white font-semibold">Welcome Back</p>
        </div>
      </div>
      <div className="relative">
        <Bell className="text-white w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-green-500 w-5 h-5 text-xs flex items-center justify-center rounded-full text-white">2</span>
      </div>
    </div>
  );
};

export default Header;
