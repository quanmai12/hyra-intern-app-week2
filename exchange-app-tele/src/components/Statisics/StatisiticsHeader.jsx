import { IoArrowBack } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const StatisiticsHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate(); // Điều hướng trang


    return (
        <div className="flex items-center justify-between px-4 py-3 bg-[#262626] relative">
            {/* Nút Back */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#313131] hover:bg-[#3b3b3b] transition">
                <IoArrowBack className="text-white text-2xl" onClick={() => navigate("/")}/>
            </button>

            {/* Tiêu đề căn giữa tuyệt đối */}
            <h1 className="text-white text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
                Statisics
            </h1>

            <div className="relative">
                <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#313131] hover:bg-[#3b3b3b] transition"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <BsThreeDots className="text-white text-2xl" />
                </button>

                {/* Menu hiển thị khi bấm vào */}
                {showMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-[#313131] text-white shadow-lg rounded-xl p-2">
                        <button className="block w-full text-left px-4 py-2 hover:bg-[#3b3b3b] rounded-lg">
                            Transaction History
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-[#3b3b3b] rounded-lg">
                            Settings
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatisiticsHeader;
