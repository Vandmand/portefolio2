import { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {}

export const Section = (props: SectionProps) => {

  const attributes = {...props}

  attributes.className += " w-2/3 min-h-screen flex items-center"

  return <section { ...attributes} />;
};
