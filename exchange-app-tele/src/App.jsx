import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Statistics from "./pages/Statistics";
// import Transactions from "./pages/Transactions";
import BottomNav from "./components/BottomNav";
import ExchangePage from "./pages/ExchangePage";
import WebApp from "./utils/telegram";

function App() {
  return (
    <Router>
      <div className="pb-16" style={{ paddingBottom: 0 }}>
        <div className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Hyra Mini App</h1>
          <p>User: {WebApp ? WebApp.initDataUnsafe?.user?.first_name : "Không tìm thấy Telegram SDK"}</p>

        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* <Route path="/transactions" element={<Transactions />} /> */}
          <Route path="/exchange" element={<ExchangePage />} />
        </Routes>
        <BottomNav />
      </div>

    </Router>
  );
}

export default App;
