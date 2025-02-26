const IncomeSpendingToggle = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex justify-center gap-2 my-4 bg-gray-800 p-1 rounded-full">
        <div
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === "Income" ? "bg-green-400 text-black shadow-md" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("Income")}
        >
          Income
        </div>
        <div
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeTab === "Spending" ? "bg-green-400 text-black shadow-md" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("Spending")}
        >
          Spending
        </div>
      </div>
    );
  };
  
  export default IncomeSpendingToggle;
  