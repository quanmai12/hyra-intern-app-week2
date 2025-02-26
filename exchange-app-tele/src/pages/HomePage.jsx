import Header from "../components/HomePage/Header";
import BalanceCard from "../components/HomePage/BalanceCard";
import BudgetInfo from "../components/HomePage/BudgetInfo";
import RecentTransactions from "../components/HomePage/RecentTransactions";
import BottomNav from "../components/BottomNav";
import Transactions from "../components/HomePage/Transactions";

const HomePage = () => {
    return (
        <div className="bg-[#262626] min-h-screen text-white pb-20">
            <Header />
            <div className="pt-24 px-4">
                <BalanceCard />
            </div>
            <BudgetInfo />
            <RecentTransactions />
            <Transactions />
            <BottomNav />
        </div>
    );
};

export default HomePage;
