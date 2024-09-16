import { filterSelection } from "@/types";
import { Image } from "@nextui-org/react";
import { DropletIcon, TongueIcon } from "hugeicons-react";

export const allWines = [
  {
    flag: "/flag-italy.png",
    image: "/wine-red.png",
    percentile: "12",
    originTown: "lombardy",
    year: "2021",
    color: "red",
    winemaker: "chevalier wines",
    title: "lorem ipsum",
    price: 12.99,
  },
  {
    flag: "/flag-france.png",
    image: "/wine-fancy.png",
    percentile: "13",
    originTown: "bordeaux",
    year: "2015",
    color: "red",
    winemaker: "pinot noir",
    title: "domaine serene",
    price: 17.99,
  },
  {
    flag: "/flag-georgia.png",
    image: "/wine-white.png",
    percentile: "11",
    originTown: "tbilisi",
    year: "2017",
    color: "white",
    winemaker: "cullen",
    title: "margaret river",
    price: 24.99,
  },
];

export const allWines2 = [
  {
    flag: "/flag-italy.png",
    image: "/wine-red.png",
    percentile: "12",
    originTown: "lombardy",
    year: "2021",
    color: "red",
    winemaker: "chevalier wines",
    title: "lorem ipsum",
    price: 12.99,
  },
  {
    flag: "/flag-france.png",
    image: "/wine-fancy.png",
    percentile: "13",
    originTown: "bordeaux",
    year: "2015",
    color: "red",
    winemaker: "pinot noir",
    title: "domaine serene",
    price: 17.99,
  },
  {
    flag: "/flag-georgia.png",
    image: "/wine-white.png",
    percentile: "11",
    originTown: "tbilisi",
    year: "2017",
    color: "white",
    winemaker: "cullen",
    title: "margaret river",
    price: 24.99,
  },
  {
    flag: "/flag-italy.png",
    image: "/wine-red.png",
    percentile: "12",
    originTown: "lombardy",
    year: "2021",
    color: "red",
    winemaker: "chevalier wines",
    title: "lorem ipsum",
    price: 12.99,
  },
  {
    flag: "/flag-france.png",
    image: "/wine-fancy.png",
    percentile: "13",
    originTown: "bordeaux",
    year: "2015",
    color: "red",
    winemaker: "pinot noir",
    title: "domaine serene",
    price: 17.99,
  },
  {
    flag: "/flag-georgia.png",
    image: "/wine-white.png",
    percentile: "11",
    originTown: "tbilisi",
    year: "2017",
    color: "white",
    winemaker: "cullen",
    title: "margaret river",
    price: 24.99,
  },
  {
    flag: "/flag-italy.png",
    image: "/wine-red.png",
    percentile: "12",
    originTown: "lombardy",
    year: "2021",
    color: "red",
    winemaker: "chevalier wines",
    title: "lorem ipsum",
    price: 12.99,
  },
  {
    flag: "/flag-france.png",
    image: "/wine-fancy.png",
    percentile: "13",
    originTown: "bordeaux",
    year: "2015",
    color: "red",
    winemaker: "pinot noir",
    title: "domaine serene",
    price: 17.99,
  },
  {
    flag: "/flag-georgia.png",
    image: "/wine-white.png",
    percentile: "11",
    originTown: "tbilisi",
    year: "2017",
    color: "white",
    winemaker: "cullen",
    title: "margaret river",
    price: 24.99,
  },
];

export const filterTaste: filterSelection[] = [
  { key: "bone_dry", label: "Bone Dry" },
  { key: "semi_dry", label: "Semi Dry" },
  { key: "dry", label: "Dry" },
  { key: "semi_sweet", label: "Semi Sweet" },
  { key: "sweet", label: "Sweet" },
];
export const filterType: filterSelection[] = [
  { key: "white", label: "White" },
  { key: "red", label: "Red" },
];

export const wineFiltersData = [
  {
    filterType: "toggle",
    filterTitle: "French",
    filterIcon: (
      <Image
        width={40}
        height={24}
        alt="Origin flag"
        src="flag-france.png"
        radius="none"
        className="rounded"
      />
    ),
  },
  {
    filterType: "toggle",
    filterTitle: "Italian",
    filterIcon: (
      <Image
        width={40}
        height={24}
        alt="Origin flag"
        src="flag-italy.png"
        radius="none"
        className="rounded"
      />
    ),
  },
  {
    filterType: "toggle",
    filterTitle: "Georgian",
    filterIcon: (
      <Image
        width={40}
        height={24}
        alt="Origin flag"
        src="flag-georgia.png"
        radius="none"
        className="rounded"
      />
    ),
  },
  {
    filterType: "select",
    filterTitle: "Taste",
    filterIcon: <TongueIcon color="#A7727D" size={24} />,
    filterOptions: filterTaste,
  },
  {
    filterType: "select",
    filterTitle: "Type",
    filterIcon: <DropletIcon color="#A7727D" size={24} />,
    filterOptions: filterType,
  },
];
