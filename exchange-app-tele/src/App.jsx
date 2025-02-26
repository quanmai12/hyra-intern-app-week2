import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Statistics from "./pages/Statistics";
// import Transactions from "./pages/Transactions";
import BottomNav from "./components/BottomNav";
import ExchangePage from "./pages/ExchangePage";

function App() {
  return (
    <Router>
      <div className="pb-16">
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
