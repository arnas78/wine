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

export const allWines3 = [
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

export const shippingCountries = [
  {
    id: 1,
    name: "Lithuania",
    flagUrl: "https://www.worldometers.info/img/flags/lh-flag.gif",
    numberPrefix: "+370",
  },
  {
    id: 2,
    name: "United States",
    flagUrl: "https://www.worldometers.info/img/flags/us-flag.gif",
    numberPrefix: "+1",
  },
  {
    id: 3,
    name: "United Kingdom",
    flagUrl: "https://www.worldometers.info/img/flags/uk-flag.gif",
    numberPrefix: "+44",
  },
  {
    id: 4,
    name: "Germany",
    flagUrl: "https://www.worldometers.info/img/flags/gm-flag.gif",
    numberPrefix: "+49",
  },
  {
    id: 5,
    name: "France",
    flagUrl: "https://www.worldometers.info/img/flags/fr-flag.gif",
    numberPrefix: "+33",
  },
  {
    id: 6,
    name: "Canada",
    flagUrl: "https://www.worldometers.info/img/flags/ca-flag.gif",
    numberPrefix: "+1",
  },
  {
    id: 7,
    name: "Australia",
    flagUrl: "https://www.worldometers.info/img/flags/as-flag.gif",
    numberPrefix: "+61",
  },
  {
    id: 8,
    name: "Spain",
    flagUrl: "https://www.worldometers.info/img/flags/sp-flag.gif",
    numberPrefix: "+34",
  },
  {
    id: 9,
    name: "Italy",
    flagUrl: "https://www.worldometers.info/img/flags/it-flag.gif",
    numberPrefix: "+39",
  },
  {
    id: 10,
    name: "Netherlands",
    flagUrl: "https://www.worldometers.info/img/flags/nl-flag.gif",
    numberPrefix: "+31",
  },
  {
    id: 11,
    name: "Japan",
    flagUrl: "https://www.worldometers.info/img/flags/ja-flag.gif",
    numberPrefix: "+81",
  },
  {
    id: 12,
    name: "Brazil",
    flagUrl: "https://www.worldometers.info/img/flags/br-flag.gif",
    numberPrefix: "+55",
  },
  {
    id: 13,
    name: "Sweden",
    flagUrl: "https://www.worldometers.info/img/flags/sw-flag.gif",
    numberPrefix: "+46",
  },
  {
    id: 14,
    name: "Mexico",
    flagUrl: "https://www.worldometers.info/img/flags/mx-flag.gif",
    numberPrefix: "+52",
  },
  {
    id: 15,
    name: "Belgium",
    flagUrl: "https://www.worldometers.info/img/flags/be-flag.gif",
    numberPrefix: "+32",
  },
  {
    id: 16,
    name: "Switzerland",
    flagUrl: "https://www.worldometers.info/img/flags/sz-flag.gif",
    numberPrefix: "+41",
  },
  {
    id: 17,
    name: "Austria",
    flagUrl: "https://www.worldometers.info/img/flags/au-flag.gif",
    numberPrefix: "+43",
  },
  {
    id: 18,
    name: "Ireland",
    flagUrl: "https://www.worldometers.info/img/flags/ei-flag.gif",
    numberPrefix: "+353",
  },
  {
    id: 19,
    name: "Denmark",
    flagUrl: "https://www.worldometers.info/img/flags/da-flag.gif",
    numberPrefix: "+45",
  },
  {
    id: 20,
    name: "Norway",
    flagUrl: "https://www.worldometers.info/img/flags/no-flag.gif",
    numberPrefix: "+47",
  },
  {
    id: 21,
    name: "South Korea",
    flagUrl: "https://www.worldometers.info/img/flags/ks-flag.gif",
    numberPrefix: "+82",
  },
];
