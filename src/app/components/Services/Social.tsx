import { MarketData } from "react-ts-tradingview-widgets";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="flex items-center flex-col justify-around p-6 bg-gray-900 text-white md:flex-row">
      <div style={{ minHeight: "400px" }} className="p-2 mt-10 md:mt-0">
        <MarketData colorTheme="dark" width="100%" height={400} />
      </div>

      <div>
        <h2 className="text-2xl font-bold">Социјални Мрежи</h2>
        <div className="flex space-x-4 mt-3">
          <FaFacebookF className="text-purple-400 text-3xl cursor-pointer" />
          <FaInstagram className="text-purple-400 text-3xl cursor-pointer" />
          <FaYoutube className="text-purple-400 text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
