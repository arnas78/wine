"use client";
import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { Selection } from "@react-types/shared";

interface FilterCardProps {
  filterIcon: React.ReactNode;
  filterTitle: string;
  filterType: string;
  filterDropdown?: string[];
  filterActive?: false;
}

const FilterCard = ({
  filterType,
  filterDropdown,
  filterIcon,
  filterTitle,
}: FilterCardProps) => {
  let [isActive, setIsActive] = useState(false);

  const [selected, setSelected] = React.useState<Selection>(new Set(["dry"]));

  interface Animal {
    key: string; // The unique identifier for each animal
    label: string; // The display name or label for each animal
  }

  const taste: Animal[] = [
    { key: "bone_dry", label: "Bone Dry" },
    { key: "semi_dry", label: "Semi Dry" },
    { key: "dry", label: "Dry" },
    { key: "semi_sweet", label: "Semi Sweet" },
    { key: "sweet", label: "Sweet" },
  ];

  const itemClasses = {
    trigger:
      "py-0 px-4 transition-all flex items-center w-[190px] h-[50px] bg-grey-100 border-[1px] border-grey-900 text-grey-900",
    selectorIcon: "text-grey-500 w-6 h-6`}",
    value: "text-grey-900 font-Quattrocento text-2xl",
    innerWrapper: "flex justify-start items-center gap-4",
  };

  function isSelectedEmpty(selected: Set<Selection>): boolean {
    return selected.size === 0;
  }

  return (
    <div>
      {filterType === "toggle" ? (
        <Button
          color="danger"
          variant="bordered"
          startContent={
            <div className="w-[40px] flex justify-center items-center">
              {filterIcon}
            </div>
          }
          className={`transition-all px-4 flex items-center justify-start gap-4 w-[190px] h-[50px] ${isActive ? "bg-grey-100 border-grey-900" : "bg-white border-grey-300"} border-[1px] mr-auto`}
          onPress={(e) => {
            setIsActive(!isActive);
          }}
        >
          <h3 className="text-grey-900 text-2xl">{filterTitle}</h3>
        </Button>
      ) : (
        <Select
          placeholder="Taste"
          selectionMode="multiple"
          disallowEmptySelection
          variant="bordered"
          startContent={
            <div className="w-[70px] flex justify-center items-center">
              {filterIcon}
            </div>
          }
          renderValue={() => {
            return <h3>Taste</h3>;
          }}
          classNames={itemClasses}
          className="flex items-center justify-start"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {taste.map((level) => (
            <SelectItem key={level.key}>{level.label}</SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
};

export default FilterCard;
