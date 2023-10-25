import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"p"> {}

export const Link = (props: LinkProps) => {
  const attributes = { ...props};
  attributes.className +=" font-bdo-grotesk text-link uppercase transition-all hover:font-bold hover:tracking-[0.5rem]"

  return (
    <p {...attributes} />
  );
};
