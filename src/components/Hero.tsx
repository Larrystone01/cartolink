"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageBackground from "./background";
import { HeroImageBackground } from "@/lib/image";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 2;
  const itemWidth = 590;
  const maxIndex = HeroImageBackground.length - visibleItems;
  const dots = Array.from({ length: maxIndex + 1 });
  const handleNext = () => {
    setCurrentIndex((prev) => {
      return Math.min(prev + 1, maxIndex);
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      return Math.max(prev - 1, 0);
    });
  };

  // const handleCarousel = () => {
  //   setCurrentIndex (next) => {
  //     if()
  //   }
  // }

  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="hero-section container mx-auto px-6">
        <div className="hero-container flex flex-col relative mx-auto w-full max-w-[1260px] h-[300px]">
          <div className="overflow-hidden flex items-center h-full">
            <div
              className="flex items-center space-x-8 transition-transform duration-500 h-full"
              style={{
                transform: `translateX(-${currentIndex * (itemWidth + 32)}px)`,
              }}
            >
              {HeroImageBackground.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ minWidth: `${itemWidth}px` }}
                    className="h-full rounded-[30px] overflow-hidden"
                  >
                    <ImageBackground image={item.imgsrc}>
                      <div className="px-4 py-3 text-white">
                        <p className="text-white text-center text-[40px] font-bold">
                          {item.shortName}
                        </p>
                        <h1 className="text-[]">{item.name}</h1>
                        <div className="flex justify-between">
                          <p className="text-[10px] w-[50%]">{item.desc}</p>
                          <button className="bg-white text-black px-2 text-[12px] rounded-[15px] cursor-pointer">
                            Try {item.shortName}
                          </button>
                        </div>
                      </div>
                    </ImageBackground>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="navigation-btn">
            <button
              className="cursor-pointer flex justify-center items-center rounded-full prev absolute bottom-3 right-7 bg-gray-200 w-5 h-5 hover:bg-gray-300"
              onClick={handlePrev}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              className="cursor-pointer flex justify-center items-center rounded-full prev absolute bottom-3 right-0 bg-gray-200 w-5 h-5 hover:bg-gray-300"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight size={14} />
            </button>
          </div>
          <div className="flex gap-1 justify-center my-4">
            {dots.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-blue-700" : "bg-gray-300"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
