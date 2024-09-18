import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
} from "hugeicons-react";
import React from "react";
import Image from "next/image";
import WineCard from "./WineCard";
import { allWines } from "@/constants";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[72px] pb-20 bg-background">
      <div className="max-w-[1280px] mx-auto flex justify-center mt-32 gap-8">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-Quattrocento text-5xl">
            Discover the bestsellers
          </h1>
          <p className="text-base font-Lora text-grey-300 w-[66%]">
            Lorem ipsum dolor sit amet consectetur. Lectus amet est bibendum
            venenatis et eu vel.
          </p>
          <div className="flex justify-between items-center h-[32px] mt-8">
            <div className="flex justify-center items-center gap-3">
              <button className="pagination  rounded-md bg-secondary">
                <ArrowLeft01Icon size={24} color="#E3D8DC" />
              </button>
              <button className="pagination pagination-active h-[100%] rounded-md bg-primary shadow">
                <ArrowRight01Icon size={24} color="#2D2224" />
              </button>
            </div>
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/flag-italy.png"
                alt="hero"
                height={24}
                width={36}
                className="object-contain rounded-md shadow"
              />
              <Image
                src="/flag-georgia.png"
                alt="hero"
                height={24}
                width={36}
                className="object-contain rounded-md shadow"
              />
              <Image
                src="/flag-france.png"
                alt="hero"
                height={24}
                width={36}
                className="object-contain rounded-md shadow"
              />
              <p className="font-Lora text-grey-300 text-lg mb-1">|</p>
              <button className="font-Lora text-grey-900 rounded-md px-2 border-accent border bg-white shadow">
                Red
              </button>
              <button className="font-Lora text-grey-900 rounded-md px-2 border-accent border bg-white shadow">
                White
              </button>
            </div>
          </div>
          <div className="mt-4 pb-4 relative rounded-md">
            <img
              src="/section-gradient.svg"
              alt="hero"
              className="absolute w-[100%] object-cover left-[40px] -bottom-[60px] h-[200px] overflow-visible"
            />
            <div className="flex items-center gap-5 rounded-md py-4 px-8 -m-4 -translate-x-4  overflow-hidden">
              {allWines?.map((wine, index) => (
                <WineCard wine={wine} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-md h-[568px] w-1/2 p-6 flex flex-col justify-between relative overflow-hidden z-50 ">
          <h1 className="text-7xl font-Quattrocento z-20 text-grey-900">
            Our wine has a <br />
            <span className="text-accent">story</span> to tell
          </h1>
          <img
            src="/countour-italy.svg"
            alt="hero"
            className="absolute -right-[20px] top-[80px] z-10 w-auto h-[450px] object-cover"
          />
          <img
            src="/arrows.svg"
            alt="hero"
            className="absolute right-[90px] top-[150px] z-10 w-auto h-[228px] object-cover"
          />

          <div className="flex gap-12 bg-background p-4 h-[224px] rounded-md z-20">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-Quattrocento text-grey-500 font-bold text-2xl">
                  Lorem ipsum
                </h4>
                <p className="font-Lora text-xs text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet consectetur. Nunc sagittis lacus
                  sed erat lobortis libero sed quam diam. Neque arcu diam
                  aliquam. Lorem ipsum dolor sit amet consectetur. Nunc sagittis
                  lacus sed.
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <button className="rounded-md bg-accent p-1 shadow">
                  <ArrowUpRight01Icon size={20} color="#FAF8F5" />
                </button>
                <h4 className="text-grey-500 text-base font-Lora">
                  Learn more
                </h4>
              </div>
            </div>
            <img
              src="/hero.jpg"
              alt="hero"
              className="flex-1 w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-grey-700 font-Quattrocento text-[32px]">
            Famous winemakers we work with
          </h3>
          <img
            src="/section-line.svg"
            alt="section-line"
            className="flex-1 w-[610px] h-auto object-cover "
          />
        </div>
        <div className="flex items-center gap-8">
          <img
            src="/winemaker-gold.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/winemaker-vintage.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/winemaker-chevalier.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/winemaker-wolf.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/winemaker-calabria.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <img
            src="/winemaker-grindstone.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
