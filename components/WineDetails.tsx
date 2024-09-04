import React from "react";
import QuantitySelector from "./QuantitySelector";
import { Button, Accordion, AccordionItem, Divider } from "@nextui-org/react";
import {
  FavouriteIcon,
  ShoppingBasketAdd01Icon,
  Location01Icon,
} from "hugeicons-react";

const WineDetails = () => {
  const itemClasses = {
    base: "py-0 w-full",
    trigger: "px-2 py-0 transition-all rounded-lg h-14 flex items-center",
    indicator: "text-[20px]",
    content: "text-small px-2 pb-4",
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col py-6 px-4 rounded-md bg-white shadow z-20 relative">
      <h4 className="text-grey-700">Chevalier Wines</h4>
      <h2 className="font-bold text-accent">Lorem Ipsum</h2>
      <h2 className="font-bold text-grey-900 mt-2">
        19.99<span className="text-2xl ml-[2px]">&#8364;</span>
      </h2>
      <p className="text-grey-500 mt-2">
        Lorem ipsum dolor sit amet consectetur. Nibh id a tellus volutpat nisi
        consequat placerat leo. Lorem ipsum dolor sit amet consectetur. Lorem
        ipsum dolor sit amet consectetur.
      </p>
      <h4 className="text-sm text-grey-700 mt-8">Quantity</h4>
      <QuantitySelector />
      <div className="flex items-center gap-4 mt-6">
        <Button
          isIconOnly
          variant="bordered"
          color="danger"
          className="border-grey-300 border-[1px] bg-white shadow rounded-md"
        >
          <FavouriteIcon
            className="text-accent font-bold p-0"
            width={20}
            height={20}
          />
        </Button>
        <Button
          variant="solid"
          disableRipple
          className="w-full bg-accent shadow rounded-md flex items-center gap-[12px]"
        >
          <ShoppingBasketAdd01Icon
            className="ml-2 text-white font-bold p-0"
            width={20}
            height={20}
          />
          <h4 className="text-white font-bold mt-[2px]">Add to cart</h4>
        </Button>
      </div>
      <Divider className="mt-8" />
      <Accordion
        selectionMode="multiple"
        className="px-0"
        itemClasses={itemClasses}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Description"
          className="text-grey-500 font-Lora text-base pt-0"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Shipping & Returns"
          className="text-grey-500 font-Lora text-base pt-0"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col gap-2 mt-8">
        <h4 className="font-bold text-grey-900">"Chevalier Wines"</h4>
        <div className="flex gap-4">
          <img
            src="/winemaker-chevalier.svg"
            alt="winemaker-1"
            className="w-[100px] h-[100px] object-cover rounded-md border-accent border-[1px]"
          />
          <div className="flex flex-col h-[100px] justify-between">
            <p className="text-grey-500 text-xs mt-1">
              Lorem ipsum dolor sit amet consectetur. Nibh lectus feugiat vita
              tristique lacus a facilisis risus. Laoreet elit ante pharetra
              scelerisques quam viverra sit condimentum. Sollicitudin
              suspendisse lobortis quisqueaet diam.
            </p>
            <div className="flex items-center gap-1">
              <Location01Icon
                className="text-accent font-bold"
                width={24}
                height={24}
              />
              <h4 className="text-grey-700">Lombardy, Italy</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineDetails;
