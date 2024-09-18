"use client";
import { CheckoutInput, CheckoutCard } from "@/components";
import { CustomRadio } from "@/components/CustomRadio";
import {
  Button,
  Checkbox,
  Divider,
  Image,
  Link,
  RadioGroup,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  ContainerTruck01Icon,
  ShoppingBasketAdd01Icon,
  Store01Icon,
} from "hugeicons-react";

export default function Checkout() {
  const styles = {
    wrapper: "w-full flex flex-nowrap gap-5 mt-6",
  };

  return (
    <div className="max-w-[1280px] h-[100vh] mx-auto mt-32 grid-checkout">
      <div>
        <h1 className="font-normal text-grey-900">Checkout</h1>
        <h3 className="text-grey-500 mt-2">Shipping information</h3>

        <RadioGroup
          orientation="horizontal"
          classNames={styles}
          defaultValue="delivery"
        >
          <CustomRadio value="delivery">
            <ContainerTruck01Icon />
            Delivery
          </CustomRadio>
          <CustomRadio value="pickup">
            <Store01Icon />
            Pick up
          </CustomRadio>
        </RadioGroup>
        <div className="mt-10 flex flex-col gap-6 items-center justify-start">
          <CheckoutInput
            type="input"
            title="Full name"
            required={true}
            placeholder="John Jonathan"
          />
          <CheckoutInput
            type="input"
            title="Email address"
            required={true}
            placeholder="john.jonathan@email.com"
          />
          <CheckoutInput
            type="dropdownInput"
            title="Phone number"
            required={true}
            placeholder="Enter phone number"
          />
          <CheckoutInput
            type="dropdown"
            title="Country"
            required={true}
            placeholder="Choose country"
          />
          <div className="w-full flex items-center gap-5">
            <CheckoutInput
              type="input"
              title="City"
              required={true}
              placeholder="Enter city"
            />
            <CheckoutInput
              type="input"
              title="State"
              required={false}
              placeholder="Enter state"
            />
            <CheckoutInput
              type="input"
              title="ZIP code"
              required={true}
              placeholder="Enter ZIP code"
            />
          </div>
          <Checkbox
            size="lg"
            radius="sm"
            className="font-Quattrocento font-lg text-grey-900 min-w-full p-0 mt-2"
          >
            I have read and agree to the{" "}
            <span className="underline text-accent">Terms and Conditions</span>
          </Checkbox>
        </div>
      </div>
      <div className="flex justify-center items-start mt-8">
        <Image src="line-vertical.svg"></Image>
      </div>
      <div className="flex flex-col mt-14">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-grey-500">Review your cart</h3>
          <img src="bubbles.svg"></img>
          <h4 className="text-accent text-lg font-bold">2 items</h4>
        </div>
        <div className="flex flex-col gap-4 mt-6">
          <CheckoutCard />
          <CheckoutCard />
        </div>
        <div className="mt-12">
          <CheckoutInput type="inputEnter" placeholder="Discount code" />
        </div>
        <div className="flex flex-col mt-4">
          <div className="w-full flex justify-between items-center">
            <p className="text-base text-grey-700 font-bold">Items in Cart</p>
            <p className="text-base text-grey-700 font-bold">
              32.98<span className="text-sm ml-[2px]">&#8364;</span>
            </p>
          </div>
          <div className="w-full flex justify-between items-center mt-2">
            <p className="text-base text-grey-500">Shipping</p>
            <p className="text-base text-grey-500 font-bold">
              1.99<span className="text-sm ml-[2px]">&#8364;</span>
            </p>
          </div>
          <div className="w-full flex justify-between items-center mt-1">
            <p className="text-base text-grey-500">Discount code</p>
            <p className="text-base text-grey-500 font-bold">
              0.00<span className="text-sm ml-[2px]">&#8364;</span>
            </p>
          </div>
          <Divider className="mt-2" />
          <div className="w-full flex justify-between items-center mt-4">
            <p className="text-lg text-grey-900 font-bold">Total</p>
            <p className="text-lg text-grey-900 font-bold">
              34.97<span className="text-sm ml-[2px]">&#8364;</span>
            </p>
          </div>
        </div>
        <Link href="/confirmation">
          <Button
            variant="solid"
            className="w-full bg-accent shadow rounded-md mt-4"
          >
            <h4 className="text-white font-bold mt-[2px]">Buy Now</h4>
          </Button>
        </Link>
      </div>
    </div>
  );
}
