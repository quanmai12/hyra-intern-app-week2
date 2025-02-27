import React from "react";
import StatisiticsHeader from "../components/Statisics/StatisiticsHeader";
import IncomeChart from "../components/Statisics/IncomeChart";
import ScheduledPayments from "../components/Statisics/ScheduledPayments";
const Statistics = () => {
  return (
    <div className="bg-[#262626] min-h-screen text-white p-4 pb-20 ">
      <StatisiticsHeader />
      <IncomeChart />
      <ScheduledPayments />

    </div>
  );
};

export default Statistics;
