"use client";
import {
  WineDetails,
  WineDetailTooltip,
  WineCard,
  FilterCard,
  WineCarousel,
} from "@/components";
import { Image, Tooltip, Button } from "@nextui-org/react";
import {
  PercentIcon,
  Location08Icon,
  Calendar03Icon,
  DropletIcon,
  ArrowRight02Icon,
  TongueIcon,
  ArrowLeft01Icon,
} from "hugeicons-react";

import { wineFiltersData, allWines2 } from "@/constants";

export default function Wine() {
  const wineDetails = [
    {
      detailType: "percentage",
      detailInfo: "13%",
      detailContent: "Alcoholic percentage",
    },
    {
      detailType: "origin",
      detailInfo: "lombardy",
      detailContent: "Origin place",
    },
    {
      detailType: "year",
      detailInfo: "2021",
      detailContent: "Year of production",
    },
    {
      detailType: "color",
      detailInfo: "red",
      detailContent: "Color of the wine",
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
        <div className="flex gap-5 mt-6">
          <div className="flex flex-col gap-3">
            {wineFiltersData.map((filter, i) => (
              <FilterCard
                key={i}
                filterType={filter.filterType}
                filterTitle={filter.filterTitle}
                filterIcon={filter.filterIcon}
                filterOptions={filter.filterOptions ?? undefined}
              />
            ))}
          </div>
          <WineCarousel items={allWines2} itemsPerPage={4} />
        </div>
      </div>
    </div>
  );
}
