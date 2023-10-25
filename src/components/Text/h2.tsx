import { ComponentProps } from "react";

interface H2Props extends ComponentProps<"h2"> {}

export const H2 = (props: H2Props) => {
  
  const attributes = {...props}
  attributes.className += " text-h2 font-bdo-grotesk font-bold uppercase"

  return <h2 { ...attributes} />;
};
