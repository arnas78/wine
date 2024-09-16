export interface WineCardProps {
  flag: string;
  image: string;
  percentile: string;
  originTown: string;
  year: string;
  color: string;
  winemaker: string;
  title: string;
  price: number;
}

export interface filterSelection {
  key: string;
  label: string;
}

type FilterOption = {
  key: string;
  label: string;
};

export interface FilterCardProps {
  filterIcon: React.ReactNode;
  filterTitle: string;
  filterType: string;
  filterOptions?: FilterOption[];
}
