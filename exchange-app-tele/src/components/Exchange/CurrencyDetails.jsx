const CurrencyDetails = () => {
    return (
      <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Currency Details</h2>
        <div className="flex justify-between items-center">
          <input
            type="text"
            value="1000.00"
            className="bg-transparent text-2xl font-bold outline-none w-full"
            readOnly
          />
          <span className="text-lg">USD 🇺🇸</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <input
            type="text"
            value="121606.50"
            className="bg-transparent text-2xl font-bold outline-none w-full"
            readOnly
          />
          <span className="text-lg">BDT 🇧🇩</span>
        </div>
      </div>
    );
  };
  
  export default CurrencyDetails;