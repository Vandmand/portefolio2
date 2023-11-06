import { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {}

export const Section = (props: SectionProps) => {
  return (
  <div className="lg:w-2/3 max-w-[90%] min-h-screen">
    <section {...props} />
  </div>);
};
