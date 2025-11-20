"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  link: string;
}

interface VideoCarouselProps {
  videos: VideoItem[];
  autoPlayInterval?: number;
  showDesktopGrid?: boolean;
  gridCols?: number;
  containerClassName?: string;
  imageClassName?: string;
}

export const VideoCarousel = ({
  videos,
  autoPlayInterval = 4000,
  showDesktopGrid = false,
  gridCols = 4,
  containerClassName = "",
  imageClassName = ""
}: VideoCarouselProps) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % videos.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [videos.length, autoPlayInterval]);

  if (videos.length === 0) return null;

  const getGridClassName = () => {
    switch (gridCols) {
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3"; 
      case 4: return "grid-cols-4";
      case 5: return "grid-cols-5";
      case 6: return "grid-cols-6";
      default: return "grid-cols-4";
    }
  };

  const getWidthClassName = () => {
    switch (gridCols) {
      case 2: return "w-1/2";
      case 3: return "w-1/3";
      case 4: return "w-1/4";
      case 5: return "w-1/5";
      case 6: return "w-1/6";
      default: return "w-1/4";
    }
  };

  return (
    <>
      {/* Mobile Carousel */}
      <div className={showDesktopGrid ? "lg:hidden relative" : "md:hidden relative"}>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm mx-auto">
            <a
              href={videos[carouselIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className={`rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${containerClassName}`}>
                <Image
                  src={videos[carouselIndex].thumbnail}
                  alt={videos[carouselIndex].title}
                  width={350}
                  height={220}
                  className={`w-full h-48 object-cover ${imageClassName}`}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      {showDesktopGrid && (
        <div className={`hidden lg:grid ${getGridClassName()} gap-6`}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className={`rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${containerClassName}`}>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={300}
                  height={200}
                  className={`w-full h-48 object-cover ${imageClassName}`}
                />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Desktop Carousel */}
      {!showDesktopGrid && (
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${carouselIndex * (100 / gridCols)}%)`,
              }}
            >
              {videos.map((video) => (
                <div key={video.id} className={`${getWidthClassName()} flex-shrink-0 px-2`}>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${containerClassName}`}>
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={350}
                        height={220}
                        className={`w-full h-48 object-cover ${imageClassName}`}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};