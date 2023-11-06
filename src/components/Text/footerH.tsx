import { ComponentProps } from "react";

interface FooterHProps extends ComponentProps<"h3"> {
  className?: undefined
}

export const FooterH = (props: FooterHProps) => {

  return (<h3 { ...props} 
    className="
    text-bsm tablet-p:text-bxl
    font-bdo-grotesk
    uppercase
    "
  />);
};
