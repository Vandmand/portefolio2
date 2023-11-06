import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {
  className?: undefined
}

export const H1 = (props: H1Props) => {

  return (<h1 { ...props} 
    className="
    text-hmd tablet:text-tsm laptop:text-tmd desktop:text-txl
    font-treat 
    "
  />);
};
