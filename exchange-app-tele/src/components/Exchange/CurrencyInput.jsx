import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import countryFlags from "../../utils/countryFlags";
import { motion } from "framer-motion"; // Import Framer Motion để tạo animation

const CurrencyInput = ({ label, amount, currency, onAmountChange, onCurrencyChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`p-4 bg-[#1E1E1E] rounded-xl flex justify-between items-center shadow-md border ${
        isFocused ? "border-green-500" : "border-gray-700"
      } transition-all duration-300`}
    >
      {/* Input số tiền */}
      <div>
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="bg-transparent text-white text-xl font-semibold outline-none w-full transition-all duration-200 focus:text-green-400"
          placeholder="0.00"
        />
      </div>

      {/* Chọn đơn vị tiền tệ */}
      <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200">
        <motion.img
          src={countryFlags[currency]}
          alt={currency}
          className="w-5 h-5 rounded-full"
          whileHover={{ scale: 1.1 }}
        />
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-transparent text-white text-sm outline-none cursor-pointer"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="VND">VND</option>
          <option value="BDT">BDT</option>
        </select>
        <FaChevronDown className="text-gray-400 text-xs" />
      </div>
    </motion.div>
  );
};

export default CurrencyInput;
