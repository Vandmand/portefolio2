import { ComponentProps } from "react";

interface BodyProps extends ComponentProps<"p"> {}

export const Body = (props: BodyProps) => {

  const attributes = {...props}

  attributes.className += " font-bdo-grotesk text-body"

  return <p { ...attributes} />;
};
