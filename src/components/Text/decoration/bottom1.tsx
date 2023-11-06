import { ComponentProps } from "react";

interface BottomProps extends ComponentProps<"p"> {}

export const Bottom1 = (props: BottomProps) => {

  const attributes = {...props, className: undefined}

  return (
  <p 
  {...attributes} 
  className="
    text-fsm phone:text-fmd laptop:text-bxl
    font-black
    font-bdo-grotesk
    uppercase
    text-secondary
  "
  />);
}; 
 