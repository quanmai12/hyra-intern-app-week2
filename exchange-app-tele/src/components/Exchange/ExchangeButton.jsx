import React from "react";

const ExchangeButton = ({ onClick }) => {
  return (
    <button 
      className="bg-lime-500 text-black text-lg font-bold py-4 w-full rounded-lg mt-4"
      onClick={onClick}
    >
      Exchange Money
    </button>
  );
};

export default ExchangeButton;
