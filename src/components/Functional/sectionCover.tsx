import { ComponentProps } from "react";

interface SectionCoverProps extends ComponentProps<"div"> {}

export const SectionCover = (props: SectionCoverProps) => {
  const attributes = { ...props };

  attributes.className =
    "text-neutral-text w-full bg-neutral-background z-10 px-8 pt-20 pb-8 relative " + attributes.className;

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-b from-primary-700 to-[transparent]" />
      <div {...attributes} />
    </div>
  );
};

// 
