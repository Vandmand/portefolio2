import { ComponentProps } from "react";

interface BigProps extends ComponentProps<"p"> {}

export const Big = (props: BigProps) => {

  const attributes = {...props}

  attributes.className += " text-[2rem] font-bdo-grotesk text-neutral-text font-bold"

  return <p { ...attributes} />;
};
