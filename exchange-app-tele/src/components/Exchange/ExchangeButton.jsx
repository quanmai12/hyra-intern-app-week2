const ExchangeButton = ({ onClick }) => {
    return (
      <button
        className="w-full bg-green-500 text-black p-4 rounded-lg mt-4"
        onClick={onClick}
      >
        Exchange Money
      </button>
    );
  };
  
  export default ExchangeButton;
  