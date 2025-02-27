import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 25000 }, // Cột nổi bật
  { month: "Apr", value: 18000 },
  { month: "May", value: 22000 },
  { month: "Jun", value: 19000 },
];

const IncomeChart = ({ activeTab }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("Y");

  return (
    <div className="bg-[#272727] p-5 rounded-2xl shadow-xl text-white">
      {/* Tiêu đề + Icon */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-medium text-gray-400">
          {activeTab === "Income" ? "Total Income" : "Total Spending"}
        </h2>
        <div className="p-2 bg-[#292929] rounded-full">
          {/* Icon xu hướng */}
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

      {/* Số tiền tổng */}
      <p className="text-4xl font-bold text-[#C0FF00] mt-1">$67,545.23</p>

      {/* Bộ lọc thời gian (D, W, M, Y) */}
      <div className="flex justify-between my-4 bg-[#313131] p-1 rounded-full">
        {["D", "W", "M", "Y"].map((period) => (
          <button
            key={period}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all ${
              selectedPeriod === period ? "bg-[#C0FF00] text-black shadow-md" : "text-gray-400"
            }`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Biểu đồ */}
      <div className="h-44 bg-[#292929] rounded-xl flex items-end px-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis
              dataKey="month"
              stroke="gray"
              tick={{ fill: "gray", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="gray"
              tick={{ fill: "gray", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="value"
              fill="#333"
              radius={[6, 6, 0, 0]}
              barSize={14}
            />
            <Bar
              dataKey="value"
              fill="#C0FF00"
              radius={[6, 6, 0, 0]}
              barSize={14}
              data={data.map((d, i) => (i === 2 ? d : null))}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
