"use client";
import React from "react";
import { Image } from "@nextui-org/image";
import {
  PercentIcon,
  TongueIcon,
  DropletIcon,
  Delete02Icon,
} from "hugeicons-react";
import QuantitySelector from "./QuantitySelector";

const CheckoutCard = () => {
  return (
    <div className="w-full rounded-md shadow py-4 pr-3 bg-secondary flex justify-between">
      <div className="flex">
        <img
          src="wine-white.png"
          alt="white wine"
          width={35}
          className="mx-10"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-grey-700 text-sm">Chevalier Wines</p>
            <h4 className="text-accent font-bold">Lorem ipsum</h4>
            <p className="text-grey-500 text-sm mt-2">
              Lorem ipsum dolor sit amet consec
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <Image
              src="/flag-italy.png"
              alt="hero"
              height={20}
              width={32}
              className="object-contain rounded"
            />
            <img src="dot.svg"></img>
            <div className="flex gap-1 items-center">
              <PercentIcon color="#7D7577" size={24} />
              <p className="text-sm text-grey-700">13%</p>
            </div>
            <img src="dot.svg"></img>
            <div className="flex gap-1 items-center">
              <DropletIcon color="#7D7577" size={24} />
              <p className="text-sm text-grey-700">Red</p>
            </div>
            <img src="dot.svg"></img>
            <div className="flex gap-1 items-center">
              <TongueIcon color="#7D7577" size={24} />
              <p className="text-sm text-grey-700">Dry</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <div className="flex flex-col items-end">
          <h4 className="text-grey-900 font-bold">$19,99</h4>
          <QuantitySelector />
        </div>
        <Delete02Icon color="#A7727D" size={28} />
      </div>
    </div>
  );
};

export default CheckoutCard;
