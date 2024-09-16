"use client";
import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import {
  PercentIcon,
  Location08Icon,
  Calendar03Icon,
  DropletIcon,
} from "hugeicons-react";

interface WineDetailsProps {
  detailType: string;
  detailInfo: string;
  detailContent: string;
}

const WineDetailTooltip = ({
  detailType,
  detailInfo,
  detailContent,
}: WineDetailsProps) => {
  const getDetailIcon = (detailType: string) => {
    switch (detailType) {
      case "percentage":
        return <PercentIcon color="#A7727D" size={24} />;
      case "origin":
        return <Location08Icon color="#A7727D" size={24} />;
      case "year":
        return <Calendar03Icon color="#A7727D" size={24} />;
      case "color":
        return <DropletIcon color="#A7727D" size={24} />;
      default:
        throw new Error(`Unknown detailType: ${detailType}`);
    }
  };

  return (
    <Tooltip
      content={
        <div className="px-1 py-2 flex items-center justify-center gap-1">
          <p className="text-sm text-grey-500">{detailContent} is</p>
          <span className="text-grey-700 font-bold capitalize">
            {detailInfo}
          </span>
        </div>
      }
      placement="right"
      radius="sm"
    >
      <Button
        className="border-accent bg-white text-grey-700 font-Lora text-base capitalize shadow items-center justify-start mr-auto border-[1px]"
        variant="bordered"
        disableAnimation
        radius="sm"
      >
        {getDetailIcon(detailType)}
        {detailInfo}
      </Button>
    </Tooltip>
  );
};

export default WineDetailTooltip;
