import { ComponentProps } from "react";

interface TopProps extends ComponentProps<"p"> {}

export const Top = (props: TopProps) => {

  const attributes = {...props, className : undefined}

  return (
    <p 
      { ...attributes} 
      className="
        text-fsm phone:text-fxl laptop:text-bmd
        font-treat
        text-secondary 
      "
    />
  );
};


