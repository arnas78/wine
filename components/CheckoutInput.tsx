"use client";
import {
  Avatar,
  Input,
  Select,
  SelectedItems,
  SelectItem,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";

import { Tag01Icon } from "hugeicons-react";

interface CheckoutInputProps {
  type: string;
  title?: string;
  required?: boolean;
  placeholder?: string;
}
import { shippingCountries } from "@/constants";

export const CheckoutInput = ({
  type,
  title,
  required,
  placeholder,
}: CheckoutInputProps) => {
  const styles = {
    label: "font-Quattrocento text-lg text-grey-900 font-bold",
    base: "",
    mainWrapper: "",
    inputWrapper:
      "bg-white rounded-md py-6 border-1 border-grey-100 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white data-[hover=true]:border-accent group-data-[focus=true]:border-grey-900",
    innerWrapper: "",
    input: "",
    clearButton: "",
    helperWrapper: "",
    description: "",
    errorMessage: "",
  };

  const styles2 = {
    label: "font-Quattrocento text-lg text-grey-900 font-bold",
    base: "transition-all",
    mainWrapper: "",
    inputWrapper:
      "bg-white rounded-md py-6 border-1 border-grey-300 px-0 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white",
    innerWrapper: "",
    input: "",
    clearButton: "",
    helperWrapper: "",
    description: "",
    errorMessage: "",
  };

  const styles3 = {
    label: "font-Quattrocento text-lg text-grey-900 font-bold",
    base: "transition-all",
    mainWrapper: "",
    inputWrapper:
      "bg-white rounded-md py-6 border-1 border-grey-300 px-0 group-data-[focus=true]:bg-white group-data-[hover=true]:bg-white",
    innerWrapper: "",
    input: "",
    clearButton: "",
    helperWrapper: "",
    description: "",
    errorMessage: "",
  };

  type Country = {
    id: number;
    name: string;
    flagUrl: string;
    numberPrefix: string;
  };

  const itemClasses = {
    label: "font-Quattrocento text-lg text-grey-900 font-bold",
    trigger: `bg-white font-Quattrocento  text-grey-900 font-bold rounded-md py-6 border-1 border-grey-300`,
  };

  switch (type) {
    case "input":
      return (
        <Input
          label={title}
          isRequired={required}
          labelPlacement="outside"
          placeholder={placeholder}
          classNames={styles}
        />
      );
    case "inputEnter":
      return (
        <Input
          label={title}
          isRequired={required}
          labelPlacement="outside"
          placeholder={placeholder}
          classNames={styles3}
          startContent={
            <Tag01Icon color="#7D7577" size={32} className="mx-4" />
          }
          endContent={
            <Button className="text-accent text-lg bg-transparent rounded-md py-6">
              Apply
            </Button>
          }
        />
      );
    case "dropdown":
      return (
        <Select
          items={shippingCountries}
          label={title}
          isRequired={required}
          placeholder={placeholder}
          labelPlacement="outside"
          classNames={{
            label: "font-Quattrocento text-lg text-grey-900 font-bold",
            trigger: "py-6 rounded-md bg-white border-1 border-grey-300",
          }}
          renderValue={(items: SelectedItems<Country>) => {
            return items.map((item) => (
              <div key={item.key} className="flex items-center gap-4">
                <Image
                  width={40}
                  height={25}
                  alt="Origin flag"
                  src={item.data?.flagUrl}
                  loading="eager"
                  radius="none"
                  className="rounded"
                />
                <span className="text-small">{item.data?.name}</span>
              </div>
            ));
          }}
        >
          {(country) => (
            <SelectItem key={country.id} textValue={country.name}>
              <div className="flex gap-4 items-center py-1">
                <Image
                  width={40}
                  height={25}
                  alt="Origin flag"
                  src={country.flagUrl}
                  loading="eager"
                  radius="none"
                  className="rounded"
                />
                <div className="flex flex-col">
                  <span className="text-small">{country.name}</span>
                </div>
              </div>
            </SelectItem>
          )}
        </Select>
      );
    case "dropdownInput":
      return (
        <Input
          placeholder={placeholder}
          label={title}
          isRequired={required}
          labelPlacement="outside"
          classNames={styles2}
          startContent={
            <Select
              items={shippingCountries}
              placeholder="+###"
              classNames={{
                base: "w-[120px] mr-2",
                popoverContent: "w-[620px]",
                trigger:
                  "w-full py-6 rounded-md bg-white shadow-none border-r-1",
              }}
              renderValue={(items: SelectedItems<Country>) => {
                return items.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-center"
                  >
                    <span className="text-small font-bold">
                      {item.data?.numberPrefix}
                    </span>
                  </div>
                ));
              }}
            >
              {(country) => (
                <SelectItem key={country.id} textValue={country.name}>
                  <div className="flex gap-4 items-center">
                    <Image
                      width={40}
                      height={25}
                      alt="Origin flag"
                      src={country.flagUrl}
                      loading="eager"
                      radius="none"
                      className="rounded"
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{country.name}</span>
                      <span className="text-tiny text-default-400">
                        {country.numberPrefix}
                      </span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          }
        />
      );

    default:
      return null;
  }
};
