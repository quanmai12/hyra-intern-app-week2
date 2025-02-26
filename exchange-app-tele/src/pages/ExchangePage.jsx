import CurrencyDetails from "../components/Exchange/CurrencyDetails";
import ExchangeRate from "../components/Exchange/ExchangeRate";
import Keypad from "../components/Exchange/Keypad";
import ExchangeButton from "../components/Exchange/ExchangeButton";

const ExchangePage = () => {
  return (
    <div className="bg-black min-h-screen text-white p-4 flex flex-col items-center">
      <CurrencyDetails />
      <ExchangeRate />
      <Keypad />
      <ExchangeButton />
    </div>
  );
};

export default ExchangePage;
