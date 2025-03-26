export const TradingIdeas = () => {
  return (
    <section className="bg-[#191C21] text-white py-16 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        📢 Копирај ги моите трејдинг идеи{" "}
        <span className="text-purple-400">БЕСПЛАТНО!</span>
      </h2>

      <div className="text-left max-w-2xl mx-auto">
        <p className="font-bold">Во рамките на групата добиваш:</p>
        <ul className="mt-2 space-y-2">
          <li>✔ Бесплатен пристап до нашата трејдинг група за сигнали</li>
          <li>
            ✔ Бесплатен пристап на преку{" "}
            <span className="text-purple-400 font-bold">100 видеа</span> во вид
            на едукација
          </li>
          <li>
            ✔ Бесплатна Е-Книга
            <span className="text-purple-400">
              {" "}
              The Candlestick Trading Bible
            </span>{" "}
            од
            <span className="font-bold"> Munehisa Homma</span> превод на
            македонски јазик од тимот на
            <span className="text-purple-400"> TradingLabMK</span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <p className="font-bold mb-3">Креирај сметка</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "Останати држави", flag: "" },
            { name: "Македонија", flag: "🇲🇰" },
            { name: "Германија", flag: "🇩🇪" },
            { name: "Италија", flag: "🇮🇹" },
            { name: "Франција", flag: "🇫🇷" },
            { name: "Шпанија", flag: "🇪🇸" },
          ].map((country, index) => (
            <button
              key={index}
              className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
            >
              <a href="https://go.startrader.com/visit/?bta=36621&brand=startrader">
                {country.flag} {country.name}
              </a>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
