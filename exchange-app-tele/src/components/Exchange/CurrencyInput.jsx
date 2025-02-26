const CurrencyInput = ({ label, amount, currency, onAmountChange, onCurrencyChange }) => {
    return (
      <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-gray-400">{label}</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="bg-transparent text-white text-xl outline-none w-full"
          />
        </div>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-lg"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="VND">VND</option>
        </select>
      </div>
    );
  };
  
  export default CurrencyInput;
  