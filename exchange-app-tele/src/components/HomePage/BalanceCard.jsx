import { ArrowUpRight, ArrowDownLeft, CreditCard, QrCode } from "lucide-react";

const BalanceCard = () => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 text-white">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-400 text-sm">My Balance</p>
          <p className="text-2xl font-bold">$24,600.00</p>
          <p className="text-green-400 text-sm">+22.7%</p>
        </div>
        <button className="bg-gray-700 px-3 py-1 rounded-lg text-sm">Add Card +</button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-4">
        <button className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
          <ArrowUpRight className="text-white" />
          <span className="text-xs">Withdraw</span>
        </button>
        <button className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
          <ArrowDownLeft className="text-white" />
          <span className="text-xs">Deposit</span>
        </button>
        <button className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
          <CreditCard className="text-white" />
          <span className="text-xs">Pay</span>
        </button>
        <button className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
          <QrCode className="text-white" />
          <span className="text-xs">Scan</span>
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
