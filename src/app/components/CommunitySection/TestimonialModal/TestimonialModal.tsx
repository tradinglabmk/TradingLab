"use client";

import { useState } from "react";
import Image from "next/image";
import { MemberData } from "../data";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: MemberData | null;
}

export default function TestimonialModal({ isOpen, onClose, member }: TestimonialModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !member) return null;

  // Filter out empty or invalid images
  const images = member.modalData.testimonialImages.filter(img => img && img.trim() !== '');
  const hasMultipleImages = images.length > 1;
  const hasImages = images.length > 0;

  // Reset image index if it's out of bounds
  if (currentImageIndex >= images.length && images.length > 0) {
    setCurrentImageIndex(0);
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 w-full max-w-[800px] mx-4 max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-xl border border-gray-700/50">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-600/30">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                {member.profileImage ? (
                  <Image
                    src={member.profileImage}
                    alt={`${member.name} profile`}
                    fill
                    className="object-cover scale-110"
                    onError={(e) => {
                      // Fallback to a placeholder or hide the image
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-white font-medium text-xl">{member.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Member
                  </span>
                  <span className="text-gray-400 text-sm">{member.memberSince}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {hasImages ? (
              <>
                {/* Mobile: Image Slider */}
                <div className="md:hidden">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${member.name} testimonial ${currentImageIndex + 1}`}
                      fill
                      className="object-contain bg-black/20"
                      priority
                    />
                    
                    {/* Mobile Navigation Arrows */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200"
                        >
                          <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-all duration-200"
                        >
                          <ChevronRightIcon className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Mobile: Image Counter & Dots */}
                  {hasMultipleImages && (
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <span className="text-gray-400 text-sm mr-4">
                        {currentImageIndex + 1} / {images.length}
                      </span>
                      <div className="flex space-x-2">
                        {images.map((_, index) => (
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
                  )}
                </div>

                {/* Desktop: Image Grid */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-2 gap-6">
                    {images.map((image, index) => (
                      <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${member.name} testimonial ${index + 1}`}
                          fill
                          className="object-contain bg-black/20 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* No images available message */
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg">
                  Нема достапни слики за овој член.
                </div>
                <p className="text-gray-500 mt-2 text-sm">
                  {member.modalData.fullTestimonial || member.testimonial}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}