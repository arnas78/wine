import { RadioGroup, Radio, cn, useRadio } from "@nextui-org/react";
import { Home09Icon } from "hugeicons-react";
import { ReactNode } from "react";

// Define the props type for CustomRadio
interface CustomRadioProps {
  children: ReactNode;
  description?: string;
  value: string;
  [key: string]: any; // This allows for any additional props
}
interface CustomRadioProps {}

export const CustomRadio = (props: CustomRadioProps) => {
  const { children, ...otherProps } = props;

  const { isSelected } = useRadio(props);

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: `m-0 bg-white items-center max-w-[100%] w-full cursor-pointer rounded-lg gap-2 p-4 border-1 border-grey-300 group-data-[selected=true]:border-accent data-[selected=true]:bg-secondary ${isSelected && "border-grey-700"}`,
        control: "bg-accent border-accent",
      }}
    >
      <div
        className={`flex gap-2 items-center ${isSelected ? "text-accent" : "text-grey-500"}`}
      >
        {children}
      </div>
    </Radio>
  );
};
