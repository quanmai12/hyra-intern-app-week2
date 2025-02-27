import React from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { FaChevronDown } from "react-icons/fa";
import countryFlags from "../../utils/countryFlags";

const CurrencyInput = ({ label, amount, currency, onAmountChange, onCurrencyChange }) => {
  return (
    <div className="p-4 bg-[#262626] rounded-xl flex justify-between items-center shadow-md border border-gray-600">
      {/* Ô nhập tiền */}
      <div className="flex flex-col flex-1">
        <p className="text-gray-400 text-sm">{label}</p>
        <input
          type="text"
          value={amount}
          readOnly
          className="bg-transparent text-white text-2xl font-semibold outline-none w-full"
        />
      </div>

      {/* Dropdown chọn tiền tệ */}
      <Listbox value={currency} onChange={onCurrencyChange}>
        <div className="relative">
          {/* Nút dropdown */}
          <Listbox.Button className="flex items-center space-x-2 bg-[#333] px-3 py-2 rounded-lg hover:bg-[#444] transition">
            <img src={countryFlags[currency]} alt={currency} className="w-6 h-6 rounded-full" />
            <span className="text-white text-lg">{currency}</span>
            <FaChevronDown className="text-gray-400 text-sm" />
          </Listbox.Button>

          {/* Danh sách mã tiền */}
          <Listbox.Options className="absolute right-0 mt-2 w-40 bg-[#333] border border-gray-600 rounded-lg shadow-lg overflow-hidden z-10">
            {Object.keys(countryFlags).map((code) => (
              <Listbox.Option key={code} value={code} className="cursor-pointer flex items-center space-x-2 px-4 py-2 hover:bg-[#444] transition">
                <img src={countryFlags[code]} alt={code} className="w-6 h-6 rounded-full" />
                <span className="text-white text-lg">{code}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default CurrencyInput;
