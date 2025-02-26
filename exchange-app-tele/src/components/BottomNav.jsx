import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Repeat, PlusCircle, BarChart, Settings } from "lucide-react";
import  Button  from "@/components/ui/button";

const BottomNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const navigate = useNavigate(); // Điều hướng trang

  // Xác định trang hiện tại để đổi màu icon
  const isActive = (path) => location.pathname === path ? "text-green-400" : "text-white";

  return (
<div className=" fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-[#262626] backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-6 shadow-lg z-50" >
{/* Các icon điều hướng có đổi màu khi active */}
      <Home className={`w-6 h-6 cursor-pointer ${isActive("/")}`} onClick={() => navigate("/")} />
      <Repeat className={`w-6 h-6 cursor-pointer ${isActive("/exchange")}`} onClick={() => navigate("/exchange")} />
      
      {/* Nút Add */}
      <div className="relative">
        <button
          className="w-14 h-14 bg-green-500 text-black rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setShowMenu(!showMenu)}
        >
          <PlusCircle className="w-8 h-8" />
        </button>

        {/* Menu Popup */}
        {showMenu && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 p-4 rounded-xl shadow-lg flex flex-col gap-3">
            <Button className="w-40" onClick={() => alert("Add Transaction")}>Add Transaction</Button>
            <Button className="w-40" onClick={() => alert("Transfer")}>Transfer</Button>
            <Button className="w-40" onClick={() => alert("Deposit")}>Deposit</Button>
            <Button className="w-40" onClick={() => alert("Withdraw")}>Withdraw</Button>
          </div>
        )}
      </div>

      <BarChart className={`w-6 h-6 cursor-pointer ${isActive("/statistics")}`} onClick={() => navigate("/statistics")} />
      <Settings className={`w-6 h-6 cursor-pointer ${isActive("/settings")}`} onClick={() => navigate("/settings")} />
    </div>
  );
};

export default BottomNav;
