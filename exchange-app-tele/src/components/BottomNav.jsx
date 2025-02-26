import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-900 p-3 flex justify-around text-white">
      <Link to="/" className="text-center">
        <div>🏠</div>
        <p className="text-xs">Home</p>
      </Link>
      <Link to="/statistics" className="text-center">
        <div>📊</div>
        <p className="text-xs">Statistics</p>
      </Link>
      <Link to="/exchange" className="text-center">
        <div>💰</div>
        <p className="text-xs">Transactions</p>
      </Link>
    </div>
  );
};

export default BottomNav;
  