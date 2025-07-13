import { MarketData } from "react-ts-tradingview-widgets";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Social = () => {
  return (
    <div className="flex items-center flex-col justify-evenly p-6 bg-[#191C21] text-white md:flex-row">

      <div>
        <h2 className="text-2xl font-bold">Социјални Мрежи</h2>
        <div className="flex space-x-4 mt-3">
          <Link href={"https://www.facebook.com/profile.php?id=61573558067668"}>
            <FaFacebookF className="text-[#FEBF10] text-3xl cursor-pointer" />
          </Link>
          <Link href={"https://www.instagram.com/tradinglab.mk/"}>
            <FaInstagram className="text-[#FEBF10] text-3xl cursor-pointer" />
          </Link>
          <Link href={"https://www.youtube.com/@TradinglabMK"}>
            <FaYoutube className="text-[#FEBF10] text-3xl cursor-pointer" />
          </Link>
        </div>
      </div>

      <div style={{ minHeight: "400px" }} className="p-2 mt-10 md:mt-0">
        <MarketData colorTheme="dark" width="100%" height={400} />
      </div>



    </div>
  );
};
