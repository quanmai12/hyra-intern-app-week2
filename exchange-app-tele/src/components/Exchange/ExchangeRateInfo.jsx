const ExchangeRateInfo = ({ rate, fee }) => {
    return (
      <div className="text-center text-gray-400 mt-2">
        <p>Rate: 1 USD = {rate} VND</p>
        <p>Network Fees: {fee} USD</p>
      </div>
    );
  };
  
  export default ExchangeRateInfo;
  