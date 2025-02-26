import { useState } from "react";

const RecentTransactions = () => {
  const [showModal, setShowModal] = useState(false);

  // Danh sách tất cả giao dịch
  const allTransactions = [
    { name: "Noah", amount: "$500" },
    { name: "Mason", amount: "$200" },
    { name: "Lucas", amount: "$350" },
    { name: "Ethan", amount: "$150" },
    { name: "Oliver", amount: "$600" },
    { name: "Sophia", amount: "$450" },
    { name: "Liam", amount: "$300" },
    { name: "Emma", amount: "$250" },
    { name: "Ava", amount: "$400" },
    { name: "William", amount: "$550" },
  ];

  // Chỉ lấy 5 người đầu để hiển thị
  const visibleUsers = allTransactions.slice(0, 6);

  return (
    <div className="p-4 text-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Recent Transaction</p>
        <button 
          className="text-white-400 text-sm hover:underline"
          onClick={() => setShowModal(true)}
        >
          See all
        </button>
      </div>

      {/* Danh sách 5 người đầu tiên */}
      <div className="flex space-x-3 mt-3">
        {visibleUsers.map((user, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src="../../img/avata.png" alt={user.name} className="w-12 h-12 rounded-full border border-gray-700" />
            <p className="text-xs mt-1">{user.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#262626] bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#262626] p-5 rounded-lg w-96 animate-fade-in">
            <h2 className="text-white text-lg font-bold mb-3">All Transactions</h2>

            {/* Danh sách cuộn với 10 bản ghi */}
            <div className="h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
              <ul className="space-y-2">
                {allTransactions.map((user, index) => (
                  <li key={index} className="text-white flex justify-between border-b border-gray-700 py-2">
                    <span>{user.name}</span>
                    <span className="text-lime-400">{user.amount}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nút đóng modal */}
            <button 
              className="mt-4 text-lime-400 hover:underline w-full text-center"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
