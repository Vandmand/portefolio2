import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const Input = (props: InputProps) => {

  const attributes = {...props}
  attributes.className += " bg-[transparent] border-2 border-neutral-text outline-none py-2 px-4"

  return (
    <input {...attributes} />
  );
};
 