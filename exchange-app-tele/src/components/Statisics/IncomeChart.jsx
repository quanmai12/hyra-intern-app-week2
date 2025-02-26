import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 25000 }, // Cột nổi bật (giống ảnh mẫu)
  { month: "Apr", value: 18000 },
  { month: "May", value: 22000 },
  { month: "Jun", value: 19000 },
];

const IncomeChart = ({ activeTab }) => {
    const [selectedPeriod, setSelectedPeriod] = useState("Y");

  return (
    <div className="bg-gray-900 p-4 rounded-2xl text-center">
      {/* Tiêu đề + Tổng số tiền */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {activeTab === "Income" ? "Total Income" : "Total Spending"}
        </h2>
        <div className="p-1 bg-gray-800 rounded-full">
          {/* Icon xu hướng tăng */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l6-6 4 4 6-6" />
          </svg>
        </div>
      </div>
      <p className="text-3xl font-bold text-green-400 mt-1">$67,545.23</p>

      {/* Bộ lọc thời gian (D, W, M, Y) */}
      <div className="flex justify-center gap-3 my-3 bg-gray-800 p-1 rounded-xl">
        {["D", "W", "M", "Y"].map((period) => (
          <div
            key={period}
            className={`px-4 py-2 rounded-xl text-sm font-medium cursor-pointer transition-all ${
              selectedPeriod === period ? "bg-green-400 text-black shadow-md" : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </div>
        ))}
      </div>

      {/* Biểu đồ thu nhập/spending */}
      <div className="h-40 bg-gray-800 rounded-lg mt-2 flex items-end px-4">
        <ResponsiveContainer width="100%" height="100%" > 
          <BarChart data={data}>
            <XAxis dataKey="month" stroke="gray" />
            <YAxis stroke="gray" />
            <Bar dataKey="value" fill="#444" radius={[6, 6, 0, 0]} />
            <Bar dataKey="value" fill="#7FFF00" radius={[6, 6, 0, 0]} data={data.map((d, i) => (i === 2 ? d : null))} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
