import { useState } from "react";

const transactionsData = [
  { id: 1, name: "Henry James", amount: "+$367.00", type: "Receive", time: "10:30 AM", avatar: "/avatars/henry.jpg" },
  { id: 2, name: "Olivia Brown", amount: "-$908.00", type: "Transfer", time: "9:15 AM", avatar: "/avatars/olivia.jpg" },
  { id: 3, name: "Michael Smith", amount: "-$450.00", type: "Sent", time: "8:40 AM", avatar: "/avatars/michael.jpg" },
  { id: 4, name: "Sophia Wilson", amount: "+$1,200.00", type: "Receive", time: "7:20 AM", avatar: "/avatars/sophia.jpg" },
];

const filterOptions = ["All", "Sent", "Request", "Transfer", "Remit"];

const Transactions = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredTransactions =
    selectedFilter === "All"
      ? transactionsData
      : transactionsData.filter((t) => t.type === selectedFilter);

  return (
    <div className="p-4 bg-black text-white rounded-2xl mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Transactions</h2>
        <button className="text-gray-400 text-sm">See All</button>
      </div>

      {/* Bộ lọc giao dịch */}
      <div className="flex gap-2 mt-3">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`px-3 py-1 rounded-lg text-sm ${
              selectedFilter === filter ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300"
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Danh sách giao dịch */}
      <div className="mt-4 space-y-3">
        {filteredTransactions.map((tx) => (
          <div key={tx.id} className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
            <div className="flex items-center gap-3">
              <img src={tx.avatar} alt={tx.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">{tx.name}</p>
                <p className="text-xs text-gray-400">{tx.time}</p>
              </div>
            </div>
            <p className={`text-sm ${tx.amount.includes("+") ? "text-green-400" : "text-red-400"}`}>{tx.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
