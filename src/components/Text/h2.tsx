import { ComponentProps } from "react";

interface H2Props extends ComponentProps<"h2"> {
  className?: undefined
}

export const H2 = (props: H2Props) => {
  return (
    <h2 { ...props} 
      className="
        text-bmd tablet:text-bxl laptop:text-hsm
        font-firacode
        font-bold
        uppercase
      "
    />
  );
};
