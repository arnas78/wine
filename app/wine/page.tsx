"use client";
import {
  WineDetails,
  WineDetailTooltip,
  WineCard,
  FilterCard,
} from "@/components";
import { Image, Tooltip, Button } from "@nextui-org/react";
import {
  PercentIcon,
  Location08Icon,
  Calendar03Icon,
  DropletIcon,
  ArrowRight02Icon,
  TongueIcon,
} from "hugeicons-react";

export default function Wine() {
  const wineDetails = [
    {
      detailType: "percentage",
      detailInfo: "13%",
      detailContent: "Alcoholic percentage is 13%",
    },
    {
      detailType: "origin",
      detailInfo: "lombardy",
      detailContent: "Origin place is Lombardy, Italy",
    },
    {
      detailType: "year",
      detailInfo: "2021",
      detailContent: "Year of production is 2021",
    },
    {
      detailType: "color",
      detailInfo: "red",
      detailContent: "Color of the wine is Red",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto mt-16">
      <div className="gap-8 flex relative ">
        <div className="flex-1 flex justify-center w-full">
          <div className="flex flex-col gap-8 absolute left-0 top-0">
            <Image
              width={50}
              height={30}
              alt="Origin flag"
              src="flag-italy.png"
              loading="eager"
              radius="none"
              className="rounded shadow"
            />
            <div className="flex flex-col gap-4">
              {wineDetails.map((details, i) => (
                <WineDetailTooltip
                  key={i}
                  detailType={details.detailType}
                  detailInfo={details.detailInfo}
                  detailContent={details.detailContent}
                />
              ))}
            </div>
          </div>
          <Image
            width={117}
            height={467}
            alt="Wine image"
            src="wine-red.png"
            loading="eager"
          />
          <Image
            width={872}
            height={259}
            alt="Italy contour image"
            src="gradient-wine.svg"
            loading="eager"
            className="absolute z-0 top-[330px] -left-[465px] max-w-max"
            radius="none"
          />

          <Image
            width={565}
            height={420}
            alt="Italy contour image"
            src="contour-italy.svg"
            loading="eager"
            className="absolute top-[50px] left-[50px] max-w-max z-0"
          />
        </div>

        <div className="flex-1">
          <WineDetails />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-grey-900">Similar wines</h1>
        <div className="flex justify-between items-center">
          <h3 className="text-grey-500">
            Filter by origin country, color and dryness
          </h3>
          <div className="flex items-center gap-2 cursor-pointer">
            <h4 className="text-accent font-bold">Discover more</h4>
            <ArrowRight02Icon className="text-accent font-bold" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-6">
            <FilterCard
              filterType="select"
              filterTitle="Red"
              filterIcon={<TongueIcon color="#A7727D" size={24} />}
            />
            <FilterCard
              filterType="toggle"
              filterTitle="French"
              filterIcon={
                <Image
                  width={40}
                  height={24}
                  alt="Origin flag"
                  src="flag-france.png"
                  radius="none"
                  className="rounded"
                />
              }
            />
            <FilterCard
              filterType="toggle"
              filterTitle="Italian"
              filterIcon={
                <Image
                  width={40}
                  height={24}
                  alt="Origin flag"
                  src="flag-italy.png"
                  radius="none"
                  className="rounded"
                />
              }
            />
            <FilterCard
              filterType="toggle"
              filterTitle="Georgian"
              filterIcon={
                <Image
                  width={40}
                  height={24}
                  alt="Origin flag"
                  src="flag-georgia.png"
                  radius="none"
                  className="rounded"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
