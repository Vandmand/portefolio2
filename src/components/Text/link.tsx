import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"div"> {
  className?: undefined
}

export const Link = (props: LinkProps) => {
  return (
    <div {...props} 
    className="
      font-bdo-grotesk uppercase
      text-fxl laptop:text-bsm desktop:text-bxl
      link
    "
    />
  );
};
