const RecentTransactions = () => {
    const users = ["Noah", "Mason", "Lucas", "Ethan", "Oliver"];
  
    return (
      <div className="p-4 text-white">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Recent Transaction</p>
          <button className="text-green-400">See all</button>
        </div>
        <div className="flex space-x-3 mt-3">
          {users.map((name, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={`/user${index + 1}.png`} alt={name} className="w-12 h-12 rounded-full" />
              <p className="text-xs mt-1">{name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentTransactions;
  