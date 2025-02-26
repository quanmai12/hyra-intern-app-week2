// import { Dribbble, Figma, MessageCircle } from "lucide-react"; // Import icon

// const paymentsData = [
//   { id: 1, name: "Dribbble", price: "$7.99/m", icon: <Dribbble size={24} color="white" /> },
//   { id: 2, name: "Figma", price: "$9.99/m", icon: <Figma size={24} color="white" /> },
//   { id: 3, name: "WeChat", price: "$6.89/m", icon: <MessageCircle size={24} color="white" /> },
// ];
import { FaDribbble, FaFigma, FaWeixin } from "react-icons/fa"; // WeChat dùng FaWeixin

const paymentsData = [
  { id: 1, name: "Dribbble", price: "$7.99/m", icon: <FaDribbble size={24} color="white" /> },
  { id: 2, name: "Figma", price: "$9.99/m", icon: <FaFigma size={24} color="white" /> },
  { id: 3, name: "WeChat", price: "$6.89/m", icon: <FaWeixin size={24} color="white" /> },
];


const ScheduledPayments = () => {
  return (
    <div className="p-4 bg-black text-white rounded-2xl mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Scheduled Payments</h2>
        <button className="text-gray-400 text-sm">See all</button>
      </div>

      {/* Danh sách thanh toán */}
      <div className="mt-3 flex gap-3">
        {paymentsData.map((payment) => (
          <div key={payment.id} className="flex flex-col items-center p-4 bg-gray-900 rounded-xl w-1/3">
            {/* Icon trắng */}
            <div className="w-10 h-10 flex items-center justify-center">{payment.icon}</div>
            <p className="text-sm font-medium mt-2">{payment.name}</p>
            <p className="text-xs text-gray-400">{payment.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledPayments;
