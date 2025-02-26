const Keypad = () => {
    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "←"];
  
    return (
      <div className="grid grid-cols-3 gap-4 mt-4">
        {keys.map((key) => (
          <button
            key={key}
            className="bg-gray-800 text-white text-2xl p-4 rounded-lg active:bg-gray-600"
          >
            {key}
          </button>
        ))}
      </div>
    );
  };
  
  export default Keypad;
  