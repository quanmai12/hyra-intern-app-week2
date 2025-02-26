import Header from "../components/HomePage/Header";
import BalanceCard from "../components/HomePage/BalanceCard";
import BudgetInfo from "../components/HomePage/BudgetInfo";
import RecentTransactions from "../components/HomePage/RecentTransactions";
import BottomNav from "../components/BottomNav";
import Transactions from "../components/HomePage/Transactions";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <BalanceCard />
      <BudgetInfo />
      <RecentTransactions />
      <Transactions />
      <BottomNav />

    </div>
  );
};

export default HomePage;
