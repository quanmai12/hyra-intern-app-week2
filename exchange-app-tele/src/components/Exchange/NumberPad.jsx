import React from "react";
import { FaBackspace } from "react-icons/fa";

const NumberPad = ({ onKeyPress }) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "←"];

  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {keys.map((key) => (
        <button
          key={key}
          className="bg-[#2e2e2e] text-white p-4 rounded-lg text-xl flex justify-center items-center"
          onClick={() => onKeyPress(key)}
        >
          {key === "←" ? <FaBackspace /> : key}
        </button>
      ))}
    </div>
  );
};

export default NumberPad;
