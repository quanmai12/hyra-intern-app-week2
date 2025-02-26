import React, { useState } from "react";
import { FaPlus, FaWallet, FaMoneyBillWave, FaQrcode, FaBell, FaCamera, FaEye, FaEyeSlash } from "react-icons/fa";

const HomePage = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isBalanceHidden, setIsBalanceHidden] = useState(true);
    const isLoggedIn = true; // Giả lập trạng thái đăng nhập

    const closePopups = () => {
        setIsProfileOpen(false);
        setIsNotificationsOpen(false);
    };
    const handleAvatarChange = () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                alert("Avatar changed successfully!");
                // Ở đây có thể cập nhật state hoặc gửi file lên server
            }
        };
        fileInput.click();
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 w-full min-w-[320px] relative bg-cover bg-center bg-no-repeat" onClick={closePopups}>            
            {/* Header */}
            <header className="w-full flex justify-between items-center py-4 px-2 fixed top-0 left-0 right-0 bg-gray-900 shadow-lg z-50" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setIsProfileOpen(!isProfileOpen); setIsNotificationsOpen(false); }}>
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm text-gray-400">Hello, Sajibur 👋</p>
                        <p className="text-lg font-semibold">Welcome Back</p>
                    </div>
                </div>
                <div className="relative cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsNotificationsOpen(!isNotificationsOpen); setIsProfileOpen(false); }}>
                    <FaBell className="text-2xl text-gray-300" />
                    <span className="bg-green-500 w-5 h-5 flex items-center justify-center text-xs rounded-full absolute -top-2 -right-2">2</span>
                </div>
            </header>

            <div className="pt-20 w-full"> {/* Ensure content starts below the fixed header */}
                {/* Profile Popup */}
                {isProfileOpen && (
                    <div className="fixed top-16 left-4 w-60 bg-gray-800 rounded-xl shadow-lg p-4 z-50" onClick={(e) => e.stopPropagation()}>
                        {isLoggedIn ? (
                            <div>
                                <p className="text-lg font-semibold">User Profile</p>
                                <p className="text-sm text-gray-400">Name: Sajibur</p>
                                <p className="text-sm text-gray-400">Email: sajibur@example.com</p>
                                <p className="text-sm text-gray-400">ID: 123456</p>
                                <button className="w-full bg-blue-500 text-white py-2 mt-3 rounded-lg flex items-center justify-center space-x-2" onClick={handleAvatarChange}>
                                    <FaCamera /> <span>Change Avatar</span>
                                </button>
                                <button className="w-full bg-red-500 text-white py-2 mt-3 rounded-lg">Log Out</button>
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2">
                                <button className="w-full bg-green-500 text-white py-2 rounded-lg">Login</button>
                                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Sign Up</button>
                            </div>
                        )}
                    </div>
                )}

                {/* Notifications Popup */}
                {isNotificationsOpen && (
                    <div className="fixed top-16 right-4 w-60 bg-gray-800 rounded-xl shadow-lg p-4 z-50" onClick={(e) => e.stopPropagation()}>
                        <p className="text-lg font-semibold">Notifications</p>
                        <ul className="mt-2 text-sm text-gray-400">
                            <li className="py-2 border-b border-gray-700">Transaction received: $500</li>
                            <li className="py-2 border-b border-gray-700">New security update available</li>
                            <li className="py-2">Your monthly budget is almost used</li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Account Balance */}
            <section className="w-full bg-gray-800 p-6 rounded-2xl shadow-lg mt-4 ">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 items-center justify-between">
                    <div className="flex flex-col">
                        <h2 className="text-sm text-gray-400 ">My Balance</h2>
                        <p className="text-3xl font-semibold overflow-hidden whitespace-nowrap overflow-hidden text-ellipsis max-w-full truncate max-w-[150px]">
                            {isBalanceHidden ? "*".repeat("2460000".replace(/[^0-9]/g, "").length) : "$24,600.00"}
                        </p>

                        <p className="text-sm text-green-400">+22.7%</p>
                        <button onClick={() => setIsBalanceHidden(!isBalanceHidden)} className="text-gray-400 text-xl">
                            {isBalanceHidden ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm min-w-[100px] flex-shrink-0">
                        Add Card +
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-2 mt-4 md:grid-cols-4 sm:grid-cols-2">
                    {[FaWallet, FaMoneyBillWave, FaQrcode, FaQrcode].map((Icon, index) => (
                        <button key={index} className="bg-gray-700 p-3 rounded-lg flex items-center justify-center text-2xl md:text-3xl sm:text-xl">
                            <Icon />
                        </button>
                    ))}
                </div>


            </section>

            {/* Budget Progress */}
            <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Left to spend</span>
                    <span>Monthly budget</span>
                </div>
                <div className="flex justify-between font-semibold text-white mb-1">
                    <span>$738</span>
                    <span>$22,550.00</span>
                </div>
                <div className="bg-gray-700 rounded-lg h-2 w-full">
                    <div className="bg-green-500 h-full" style={{ width: "75%" }}></div>
                </div>
            </div>
            {/* Recent Transactions */}
            <section className="mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Recent Transaction</h3>
                    <button className="text-green-400 text-sm">See all</button>
                </div>
                <div className="overflow-x-auto whitespace-nowrap w-full p-2">

                    <div className="flex space-x-4">
                        {["Noah", "Mason", "Lucas", "Ethan", "Oliver", "quan", "mai", "duy"].map((name, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={`https://via.placeholder.com/40`} className="w-10 h-10 rounded-full" alt={name} />
                                <span className="text-xs mt-1">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Transactions Filter */}
            <section className="mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Transactions</h3>
                    <button className="text-green-400 text-sm">See all</button>
                </div>
                <div className="flex space-x-2">
                    {["All", "Sent", "Request", "Transfer", "Remit"].map((tab, index) => (
                        <button key={index} className="px-3 py-1 rounded-full text-sm"
                            style={{ backgroundColor: index === 0 ? "green" : "gray", color: index === 0 ? "white" : "gray-400" }}>
                            {tab}
                        </button>
                    ))}
                </div>
            </section>
            {/* Transactions List */}
            <div className="mt-4 space-y-4">
                {[{ name: "Henry James", amount: "+$367.00", type: "Receive" },
                { name: "Sophia Miller", amount: "-$908.00", type: "Transfer" },
                { name: "Ethan Brown", amount: "-$450.00", type: "Remit" }]
                    .map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                            <div className="flex items-center space-x-3">
                                <img src="https://via.placeholder.com/40" className="w-10 h-10 rounded-full" alt={transaction.name} />
                                <div>
                                    <p className="font-semibold">{transaction.name}</p>
                                    <p className="text-xs text-gray-400">10:30 AM</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`${transaction.amount.startsWith("+") ? "text-green-400" : "text-red-400"} font-semibold`}>
                                    {transaction.amount}
                                </p>
                                <p className="text-xs text-gray-400">{transaction.type}</p>
                            </div>
                        </div>
                    ))}
            </div>
            {/* Bottom Navigation */}
            <nav className="fixed bottom-4 bg-green-500 w-16 h-16 flex items-center justify-center rounded-full shadow-lg border-4 border-gray-700">
                <FaPlus className="text-white text-3xl" />
            </nav>
        </div>
    );
};

export default HomePage;
