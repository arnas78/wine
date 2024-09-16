"use client";
import React from "react";
import WineCard from "./WineCard";
import { ArrowRight02Icon, ArrowLeft01Icon } from "hugeicons-react";
import { useRef, useState } from "react";
import { WineCardProps } from "@/types";

interface CarouselProps {
  items: WineCardProps[]; // or any type based on your card data
  itemsPerPage: number;
}

export const WineCarousel = ({ items, itemsPerPage }: CarouselProps) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const handleTransparency = () => {
    // Make the button transparent for 300ms
    setIsTransparent(true);

    // Reset opacity after 300ms
    setTimeout(() => {
      setIsTransparent(false);
    }, 400);
  };

  // Calculate card width dynamically from the rendered item width
  const itemWidth =
    trackRef.current?.children[0].getBoundingClientRect().width || 0;
  const totalItems = items.length;
  const maxPosition = Math.max(0, (totalItems - itemsPerPage) * itemWidth);

  const handleNext = () => {
    const newPosition = Math.min(
      currentPosition + 16 * itemsPerPage + itemWidth * itemsPerPage,
      maxPosition
    );
    setCurrentPosition(newPosition);
    handleTransparency();
  };

  const handlePrev = () => {
    const newPosition = Math.max(
      currentPosition - 16 * itemsPerPage - itemWidth * itemsPerPage,
      0
    );
    setCurrentPosition(newPosition);
    handleTransparency();
  };

  return (
    <div className="w-[calc(100%-240px)] relative ">
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 rounded-md rounded-l-none bg-secondary z-20 p-1 transition-all  ${
          isTransparent ? "opacity-0" : "opacity-100"
        }`}
        onClick={handlePrev}
      >
        <ArrowLeft01Icon size={24} color="#E3D8DC" />
      </button>
      <div className="relative w-[100vw] overflow-hidden h-[400px] ">
        <div
          ref={trackRef}
          className="absolute top-0 left-0 flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentPosition}px)`,
            minWidth: "max-content",
          }}
        >
          {items.map((wine, index) => (
            <WineCard wine={wine} key={index} />
          ))}
        </div>
      </div>
      <button
        className={`rounded-md rounded-r-none bg-primary shadow absolute right-0 top-1/2 -translate-y-1/2 p-1 transition-all ${
          isTransparent ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleNext}
      >
        <ArrowRight02Icon size={24} color="#2D2224" />
      </button>
    </div>
  );
};
