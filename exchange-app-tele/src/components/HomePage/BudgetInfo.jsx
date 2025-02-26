const BudgetInfo = () => {
    const leftToSpend = 7380;
    const monthlyBudget = 22550;
    const progress = (leftToSpend / monthlyBudget) * 100; // Tính phần trăm còn lại
  
    return (
      <div className="p-4 text-white">
        {/* Tiêu đề */}
        <div className="flex justify-between text-sm">
          <p>Left to spend</p>
          <p>Monthly budget</p>
        </div>
  
        {/* Số liệu */}
        <div className="flex justify-between items-center mt-1">
          <p className="text-lg font-bold">${leftToSpend.toLocaleString()}</p>
          <p className="text-lg font-bold">${monthlyBudget.toLocaleString()}</p>
        </div>
  
        {/* Thanh progress */}
        <div className="relative w-full h-4 bg-gray-700 rounded-full mt-2 flex items-center">
          {/* Thanh tiến trình (phần màu xanh) */}
          <div
            className="absolute left-0 h-full bg-lime-400 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
  
          {/* Các dấu chấm nhỏ */}
          {[...Array(3)].map((_, index) => {
            const position = (index + 1) * 25; // Chia thành 4 phần bằng nhau
            return (
              <div
                key={index}
                className="absolute w-1.5 h-1.5 bg-gray-500 rounded-full"
                style={{
                  left: `${position}%`,
                  transform: "translate(-50%, -50%)",
                  top: "50%",
                }}
              ></div>
            );
          })}
  
          {/* Hiệu ứng tròn sáng ở đầu */}
          <div
            className="absolute w-5 h-5 bg-white rounded-full shadow-lg"
            style={{
              left: `calc(${progress}% - 10px)`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default BudgetInfo;
  