const Button = ({ children, onClick, className }) => {
    return (
      <button
        className={`px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  