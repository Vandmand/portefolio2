import { ComponentProps } from "react";

interface BodyProps extends ComponentProps<"p"> {}

export const Body = (props: BodyProps) => {

  const attributes = {...props, className: undefined}

  return (
    <p { ...attributes} 
      className="
        text-fmd/4 tablet:text-bsm/6 laptop:text-bmd/7
        font-bdo-grotesk
      " 
    />
  );
};
