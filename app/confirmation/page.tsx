"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import {
  PencilEdit01Icon,
  HeartAddIcon,
  ArrowUpRight01Icon,
  House05Icon,
  ShoppingBasket01Icon,
  Wallet03Icon,
} from "hugeicons-react";
import { WineCard } from "@/components";
import { allWines3 } from "@/constants";

export default function Confirmation() {
  return (
    <div className="max-w-[1280px] h-[100vh] mx-auto mt-32 flex gap-32">
      <div className="w-2/5 flex flex-col grow-0">
        <h1 className="text-grey-900">Success!</h1>
        <h3 className="text-grey-500 mt-2">
          Your order is being processed, stay tuned for updates
        </h3>
        <div className="rounded-md border-1 border-accent p-4 flex gap-8 mt-8">
          <div className="flex gap-2 items-center px-2">
            <img src="wine-white.png" alt="white wine" width={30} />
            <img src="wine-red.png" alt="white wine" width={30} />
          </div>
          <div className="w-full flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h3>Your order</h3>
                <img src="dot.svg"></img>
                <h3 className="text-grey-500">#721-217</h3>
              </div>
              <button className="rounded-md bg-white p-1 shadow-md">
                <ArrowUpRight01Icon size={24} color="#2D2224" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center items-center gap-2">
                <h4 className="text-grey-900 font-bold">12.09-15.09</h4>
                <div className="flex items-center gap-2">
                  <House05Icon size={20} color="#7D7577" />
                  <p className="text-sm text-grey-500">Est. Delivery</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <h4 className="text-grey-900 font-bold">x2</h4>
                <div className="flex items-center gap-2">
                  <ShoppingBasket01Icon size={20} color="#7D7577" />
                  <p className="text-sm text-grey-500">Items ordered</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <h4 className="text-grey-900 font-bold">
                  21.98<span className="text-sm ml-[2px]">&#8364;</span>
                </h4>
                <div className="flex items-center gap-2">
                  <Wallet03Icon size={20} color="#7D7577" />
                  <p className="text-sm text-grey-500">Total amount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="solid"
          className="w-full bg-accent shadow rounded-md mt-8"
        >
          <h4 className="text-white font-bold mt-[2px]">Back to Home</h4>
        </Button>
        <div className="flex flex-col items-center justify-center">
          <img src="dots.svg" className="mt-16 " />
          <h2 className="text-grey-900 mt-16">
            Similar items to your purchase
          </h2>
          <img src="line-confirmation.svg" className="mt-4" />
        </div>
        <div className="flex gap-5 mt-12">
          {allWines3?.map((wine, index) => (
            <WineCard wine={wine} key={index} />
          ))}
        </div>
      </div>
      <div className="w-3/5 flex flex-col gap-20 justify-start items-center mt-24">
        <img src="image-success.svg"></img>
        <div className="flex items-center gap-8">
          <Button
            className="rounded-md border-1 border-accent pl-3 text-grey-700 bg-transparent"
            startContent={
              <PencilEdit01Icon size={28} color="#A7727D" className="mr-1" />
            }
          >
            Leave a feedback
          </Button>
          <Button
            className="rounded-md border-1 border-accent pl-3 text-grey-700 bg-transparent"
            startContent={
              <HeartAddIcon size={28} color="#A7727D" className="mr-1" />
            }
          >
            Rate our service
          </Button>
        </div>
      </div>
    </div>
  );
}
