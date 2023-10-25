import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {}

export const H1 = (props: H1Props) => {

  const attributes = {...props}
  attributes.className += " font-treat text-h1"

  return <h1 { ...attributes} />;
};
