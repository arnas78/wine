import React from "react";
import { WineCardProps } from "@/types";
import Image from "next/image";
import {
  PercentIcon,
  Location08Icon,
  Calendar03Icon,
  DropletIcon,
} from "hugeicons-react";

interface CardProps {
  wine: WineCardProps;
}

const WineCard = ({ wine }: CardProps) => {
  return (
    <div className="rounded-lg bg-white px-3 py-4 w-[248px] flex-shrink-0 relative shadow z-50">
      <div className="flex justify-center ">
        <Image
          src={wine.flag}
          alt="hero"
          height={24}
          width={32}
          className="object-contain rounded absolute left-3 top-4"
        />
        <div className="h-[240px] w-[60px] relative mt-2">
          <Image src={wine.image} alt="hero" fill className="object-contain" />
        </div>

        <div className="absolute right-3 top-4 flex flex-col gap-3">
          <PercentIcon color="#A7727D" size={24} />
          <Location08Icon color="#A7727D" size={24} />
          <Calendar03Icon color="#A7727D" size={24} />
          <DropletIcon color="#A7727D" size={24} />
        </div>
      </div>
      <div className="mt-8">
        <p className="font-Lora text-grey-500 text-xs capitalize">
          {wine.winemaker}
        </p>
        <h4 className="font-Quattrocento text-lg text-accent capitalize">
          {wine.title}
        </h4>
        <div className="flex justify-between items-center">
          <h4 className="font-Lora text-lg text-grey-700 font-bold mt-2">
            {wine.price}
            <span className="text-sm ml-[2px]">&#8364;</span>
          </h4>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
