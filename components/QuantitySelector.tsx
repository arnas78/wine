"use client";
import React from "react";
import { useState } from "react";
import {
  PlusSignIcon,
  MinusSignIcon,
  DeletePutBackIcon,
} from "hugeicons-react";

interface QuantitySelectorProps {
  resetButton?: boolean;
}

const QuantitySelector = ({ resetButton }: QuantitySelectorProps) => {
  let [itemCount, setItemCount] = useState(1);

  return (
    <div className="mr-auto flex items-center gap-4 mt-2 select-none">
      <div className="flex justify-center items-center gap-2 rounded-md shadow bg-grey-100 mr-auto px-2 py-1 ">
        <MinusSignIcon
          className={`${itemCount == 1 ? "cursor-not-allowed opacity-40" : "cursor-pointer"} text-grey-900`}
          width={20}
          height={20}
          onClick={() => {
            itemCount > 1 ? setItemCount(itemCount - 1) : null;
          }}
        />
        <p className="text-grey-900 w-[20px] text-center">{itemCount}</p>
        <PlusSignIcon
          className="text-grey-900 cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            setItemCount(itemCount + 1);
          }}
        />
      </div>
      {resetButton && (
        <DeletePutBackIcon
          className="text-grey-500 cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            setItemCount(1);
          }}
        />
      )}
    </div>
  );
};

export default QuantitySelector;
