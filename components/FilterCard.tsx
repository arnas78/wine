"use client";
import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { Selection } from "@react-types/shared";
import { FilterCardProps } from "@/types";

const FilterCard = ({
  filterType,
  filterIcon,
  filterTitle,
  filterOptions,
}: FilterCardProps) => {
  let [isActive, setIsActive] = useState(false);

  const [selected, setSelected] = React.useState<Selection>(new Set([]));

  const itemClasses = {
    trigger: `shadow py-0 px-4 transition-all flex items-center w-[220px] h-[50px] bg-white border-[1px] ${(selected instanceof Set ? selected.size : 0) > 0 ? "border-grey-700 data-[hover=true]:border-grey-700" : "data-[focus=true]:border-grey-300 border-grey-300 "}`,
    selectorIcon: "text-grey-500 w-6 h-6`}",
    value: "text-grey-900 font-Quattrocento text-2xl",
    innerWrapper: "flex justify-start items-center gap-4 transition-all",
  };

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
          className={`shadow transition-all px-4 flex items-center justify-start gap-4 w-[220px] h-[50px] ${isActive ? "bg-grey-100 border-grey-700" : "bg-white border-grey-300"} border-[1px] mr-auto`}
          onPress={(e) => {
            setIsActive(!isActive);
          }}
        >
          <h3 className="text-grey-900 text-2xl">{filterTitle}</h3>
        </Button>
      ) : (
        <Select
          placeholder={filterTitle}
          selectionMode="multiple"
          disallowEmptySelection={false}
          variant="bordered"
          startContent={
            <div className="w-[70px] flex justify-center items-center">
              {filterIcon}
            </div>
          }
          renderValue={() => {
            return (
              <div className="flex items-center gap-4 transition-all">
                <h3>{filterTitle}</h3>
                <div className="bg-grey-100 rounded-full p-2 mr-auto w-[30px] h-[30px] flex justify-center items-center">
                  <p>{selected instanceof Set ? selected.size : 0}</p>
                </div>
              </div>
            );
          }}
          classNames={itemClasses}
          className="flex items-center justify-start"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {(filterOptions ?? []).map((level, i) => (
            <SelectItem
              className=" data-[hover=true]:bg-grey-100 data-[selectable=true]:focus:bg-grey-100"
              key={level.key}
            >
              {level.label}
            </SelectItem>
          ))}
        </Select>
      )}
    </div>
  );
};

export default FilterCard;
