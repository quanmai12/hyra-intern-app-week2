import React from "react";

const ExchangeRate = ({ rate, lastUpdated }) => {
  return (
    <div className="p-4 text-gray-300">
      <p className="text-sm">Rate</p>
      <p className="text-lg font-semibold">1 USD = {rate} BDT</p>
      <p className="text-xs text-gray-500">{lastUpdated}</p>
    </div>
  );
};

export default ExchangeRate;
