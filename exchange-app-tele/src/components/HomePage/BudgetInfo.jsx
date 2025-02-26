const BudgetInfo = () => {
    return (
      <div className="p-4 text-white">
        <div className="flex justify-between text-sm">
          <p>Left to spend</p>
          <p>Monthly budget</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-lg font-bold">$738</p>
          <p className="text-lg font-bold">$22,550.00</p>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
          <div className="bg-green-500 h-2 w-1/4 rounded-full"></div>
        </div>
      </div>
    );
  };
  
  export default BudgetInfo;
  