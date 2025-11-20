"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ContactUsForm } from "../components/Footer/ContactUsForm";
import { SEOScrollWrapper } from "../components/SEOScrollWrapper/SEOScrollWrapper";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Import contact images
import image1 from "../../../public/assets/contact-us/image1.svg";
import image2 from "../../../public/assets/contact-us/image2.svg";
import image3 from "../../../public/assets/contact-us/image3.svg";

const contactImages = [
  { id: 1, src: image1, alt: "TradingLab Contact 1" },
  { id: 2, src: image2, alt: "TradingLab Contact 2" },
  { id: 3, src: image3, alt: "TradingLab Contact 3" }
];

export default function ContactUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % contactImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % contactImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + contactImages.length) % contactImages.length);
  };

  return (
    <div className="bg-[#101016] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SEOScrollWrapper animationType="fadeInUp" delay={0} duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Instagram Images */}
            <SEOScrollWrapper animationType="fadeInLeft" delay={100} duration={0.9}>
              <div className="space-y-6">
            {/* Instagram Header */}
            <div className="mb-8 md:mb-12 flex items-center space-x-3">
              <div className="w-8 h-8 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-normal text-white">
                INSTAGRAM
              </h2>
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={contactImages[currentImageIndex].src}
                  alt={contactImages[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200"
                >
                  <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200"
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {contactImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-purple-500' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-4">
              {contactImages.map((image, index) => (
                <SEOScrollWrapper 
                  key={image.id}
                  animationType="zoomIn" 
                  delay={index * 150} 
                  duration={0.6}
                >
                  <div className="relative aspect-[2/4] rounded-lg overflow-hidden group">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </SEOScrollWrapper>
              ))}
            </div>
          </div>
        </SEOScrollWrapper>

        {/* Right Side - Contact Form */}
        <SEOScrollWrapper animationType="fadeInRight" delay={200} duration={0.9}>
          <div className="space-y-8">
            <ContactUsForm />
          </div>
        </SEOScrollWrapper>
      </div>
    </SEOScrollWrapper>
      </div>
    </div>
  );
}
