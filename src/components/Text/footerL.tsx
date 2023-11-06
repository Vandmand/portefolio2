import { ComponentProps } from "react";

interface FooterLProps extends ComponentProps<"p"> {
  className?: undefined
}

export const FooterL = (props: FooterLProps) => {

  return (<p { ...props} 
    className="
    text-fsm tablet-p:text-bsm
    font-bdo-grotesk
    hover:font-bold
    font-thin
    "
  />);
};
