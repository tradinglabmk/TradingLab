import Image from "next/image";
import whyFreeImage from "../../../../public/assets/why_free/image.png";

interface ImageTextSectionProps {
  title?: string;
  titleColor?: string;
  children: React.ReactNode;
  quoteText?: string;
  imageAlt?: string;
  imageSrc?: string;
  reverseLayout?: boolean;
  backgroundColor?: string;
  showQuoteOverlay?: boolean;
}

const ImageTextSection = ({
  title,
  titleColor = "#9F62F8",
  children,
  quoteText,
  imageAlt = "TradingLab Image",
  imageSrc,
  reverseLayout = false,
  backgroundColor = "bg-gradient-to-r from-black via-[#0f0818] to-[#1a0a4c]",
  showQuoteOverlay = false,
}: ImageTextSectionProps) => {
  const defaultImageSrc = whyFreeImage;
  const finalImageSrc = imageSrc || defaultImageSrc;

  return (
    <section
      className={`${backgroundColor} text-white py-16 px-6 md:px-12 lg:px-20`}
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <div
          className={`w-full lg:w-[85%] space-y-6 ${
            reverseLayout ? "lg:order-2" : ""
          }`}
        >
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-8">
              <span style={{ color: titleColor }}>{title}</span>
            </h2>
          )}

          <div className="space-y-6 text-lg font-light md:text-xl leading-relaxed text-gray-200">
            {children}
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`w-full ${
            reverseLayout ? "lg:order-1" : ""
          } lg:col-start-2 lg:col-end-3 flex-shrink-0 lg:min-h-[400px] min-h-[240px] z-20`}
        >
          <div className="relative w-full h-full">
            <Image
              src={finalImageSrc}
              alt={imageAlt}
              className="rounded-3xl w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>

          {/* Quote Overlay - Always below the image */}
          {showQuoteOverlay && quoteText && (
            <div className="mx-4 bg-gradient-to-r from-[#9B5EF1] to-[#59368B] rounded-2xl p-4 md:p-6">
              <p className="text-white text-2xl font-extralight text-center leading-relaxed">
                {quoteText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
