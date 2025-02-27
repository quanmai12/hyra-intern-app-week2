import React, { useState } from "react";
import ExchangeHeader from "../components/Exchange/ExchangeHeader";
import CurrencyInput from "../components/Exchange/CurrencyInput";
import ExchangeRate from "../components/Exchange/ExchangeRate";
import NumberPad from "../components/Exchange/NumberPad";
import ExchangeButton from "../components/Exchange/ExchangeButton";

const ExchangePage = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("0.00");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const exchangeRate = 121.61;

  const handleKeyPress = (key) => {
    if (key === "←") {
      setFromAmount((prev) => prev.slice(0, -1));
    } else if (key === "." && fromAmount.includes(".")) {
      return;
    } else {
      setFromAmount((prev) => (prev.length < 10 ? prev + key : prev));
    }

    if (!isNaN(fromAmount) && fromAmount !== "") {
      setToAmount((parseFloat(fromAmount) * exchangeRate).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen bg-[#262626] text-white flex flex-col p-4 pb-20">
      <ExchangeHeader />
      <div className="min-h-screen bg-[#262626] text-white flex flex-col items-center">

      {/* Nội dung chính */}
      <div className="w-full max-w-md p-4">
        {/* Currency Details */}
        <div className="bg-[#262626] p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Currency Details</h3>

          <CurrencyInput
            label="From"
            amount={fromAmount}
            currency={fromCurrency}
            onCurrencyChange={setFromCurrency}
          />

          <div className="h-4"></div>

          <CurrencyInput
            label="To"
            amount={toAmount}
            currency={toCurrency}
            onCurrencyChange={setToCurrency}
          />

          <div className="mt-2 text-sm text-gray-400 flex justify-between">
            <span>Network Fees</span>
            <span>2.59 USD</span>
          </div>
        </div>

        {/* Exchange Rate */}
        <ExchangeRate rate={exchangeRate} lastUpdated="Feb 10, 12:20 PM UTC" />

        {/* NumberPad */}
        <NumberPad onKeyPress={handleKeyPress} />

        {/* Exchange Button */}
        <ExchangeButton onClick={() => alert("Exchange Confirmed")} />
      </div>
      </div>
    </div>
  );
};

export default ExchangePage;
