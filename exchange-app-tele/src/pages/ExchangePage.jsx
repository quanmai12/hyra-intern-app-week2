import { useState } from "react";
import ExchangeHeader from "../components/Exchange/ExchangeHeader";
import CurrencyInput from "../components/Exchange/CurrencyInput";
import ExchangeRateInfo from "../components/Exchange/ExchangeRateInfo";
import NumberPad from "../components/Exchange/NumberPad";
import ExchangeButton from "../components/Exchange/ExchangeButton";

const ExchangePage = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleKeyPress = (key) => {
    if (key === "←") {
      setFromAmount((prev) => prev.slice(0, -1));
    } else {
      setFromAmount((prev) => prev + key);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <ExchangeHeader />
      <CurrencyInput label="From" amount={fromAmount} currency={currency} onAmountChange={setFromAmount} onCurrencyChange={setCurrency} />
      <CurrencyInput label="To" amount={toAmount} currency="VND" onAmountChange={setToAmount} />
      <ExchangeRateInfo rate="23,500" fee="2.59" />
      <NumberPad onKeyPress={handleKeyPress} />
      <ExchangeButton onClick={() => alert("Exchange Successful!")} />
    </div>
  );
};

export default ExchangePage;
