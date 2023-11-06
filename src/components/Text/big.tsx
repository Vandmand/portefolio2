import { ComponentProps } from "react";

interface BigProps extends ComponentProps<"p"> {}

export const Big = (props: BigProps) => {

  const attributes = {...props, className: undefined}

  return (
    <p { ...attributes} 
      className="
        text-fxl tablet:text-bsm tablet-p:text-bxl desktop:text-hsm
        font-bold
        font-bdo-grotesk
      " 
    />
  );
};