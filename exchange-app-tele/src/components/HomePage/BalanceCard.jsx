import { ArrowUpRight, ArrowDownLeft, CreditCard, QrCode } from "lucide-react";

const BalanceCard = () => {
  return (
    <div className="relative bg-[#262626] rounded-2xl p-5 text-white shadow-lg border border-gray-700 
                    before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-gray-600 
                    before:pointer-events-none before:z-[-1]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">My Balance</p>
          <p className="text-3xl font-bold">$24,600.00</p>
          <p className="text-lime-400 text-sm font-medium">+22.7%</p>
        </div>
        <button className="border border-gray-500 px-3 py-1 rounded-lg text-xs text-gray-300">
          Add Card +
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-6">
        <button className="bg-[#363636] p-3 rounded-lg flex flex-col items-center shadow-md">
          <ArrowUpRight className="text-white" />
          <span className="text-xs">Withdraw</span>
        </button>
        <button className="bg-[#363636] p-3 rounded-lg flex flex-col items-center shadow-md">
          <ArrowDownLeft className="text-white" />
          <span className="text-xs">Deposit</span>
        </button>
        <button className="bg-[#363636] p-3 rounded-lg flex flex-col items-center shadow-md">
          <CreditCard className="text-white" />
          <span className="text-xs">Pay</span>
        </button>
        <button className="bg-[#363636] p-3 rounded-lg flex flex-col items-center shadow-md">
          <QrCode className="text-white" />
          <span className="text-xs">Scan</span>
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
