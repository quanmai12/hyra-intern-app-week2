import { useState } from "react";
import IncomeSpendingToggle from "../components/Statisics/IncomeSpendingToggle";
import IncomeChart from "../components/Statisics/IncomeChart";
import ScheduledPayments from "../components/Statisics/ScheduledPayments";
const Statistics = () => {
  const [activeTab, setActiveTab] = useState("Income");

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <h1 className="text-lg font-semibold text-center">Statistics</h1>
      <IncomeSpendingToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      <IncomeChart activeTab={activeTab} />
      <ScheduledPayments />
    </div>
  );
};

export default Statistics;
