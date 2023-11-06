import { ComponentProps } from "react";

interface BottomProps extends ComponentProps<"p"> {}

export const Bottom2 = (props: BottomProps) => {

  const attributes = {...props, className : undefined}

  return (
    <p 
      { ...attributes} 
      className="
        text-fxs phone:text-fsm laptop:text-bmd
        font-light
        font-firacode
        text-secondary
      "
    />
  );
};
