import { IoArrowBack } from "react-icons/io5";

const ExchangeHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <IoArrowBack className="text-white text-2xl cursor-pointer" />
      <h1 className="text-white text-lg font-semibold">Exchange</h1>
      <div className="w-6"></div> {/* Chừa khoảng trống để căn giữa tiêu đề */}
    </div>
  );
};

export default ExchangeHeader;
