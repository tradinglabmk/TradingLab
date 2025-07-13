import Image from "next/image";
import Link from "next/link";

export const AlumniResults = () => {
  return (
    <section className=" text-white py-16 px-6 text-center flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Резултати од наши алумни од
        <span className="text-[#FEBF10]"> Sparta Bank </span>
        академијата!
      </h2>
      <button
        className="bg-[linear-gradient(88.9deg,_rgba(254,191,16,0)_6.85%,_rgba(254,191,16,0.4)_41.67%,_#FEBF10_98.87%)] text-white px-6 py-3 rounded-full text-lg flex items-center gap-2 shadow-xl cursor-pointer justify-center"
        style={{ width: "300px" }}
      >
        <Link href={"https://m.me/61573558067668"}>🚀 Зачлени се</Link>
      </button>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div
            key={index}
            className="w-56 md:w-64 lg:w-72 h-96rounded-xl shadow-lg overflow-hidden transform hover:scale-135 transition"
            style={{ left: `${index * 12}%`, zIndex: `${5 - index}` }}
          >
            <Image
              src={`/assets/certificate-${item}.png`}
              alt="Certificate"
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
