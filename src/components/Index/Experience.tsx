import Text from "@/components/Text";
import Decoration1 from "@resources/images/dec1.svg?react";
import Square from "@resources/images/decsquare.svg?react";

export const Experience = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="w-screen h-2 bg-primary" />
      <div className="bg-base-100 py-16 flex-1 flex items-center">
        <div className="w-[clamp(230px,80%,900px)] mx-[10%] flex flex-col gap-16">
          <div className="py-8 border-b-4 border-secondary">
            <Text.H1>Experience</Text.H1>
          </div>
          <div className="flex flex-col gap-2 justify-center relative">
            <Text.H2>UI/UX Design</Text.H2>
            <Text.Body>
              Understanding a problem and designing a user experience, conveying
              the desired information through a solid and understandable style.
              Planning out and visualizing said design through wireframes, brand
              boards, in programs like Figma.
            </Text.Body>
            <div className="h-3 tablet-p:h-6 w-full flex flex-row-reverse">
              <Decoration1 className="h-full w-max" />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <Text.H2>Fullstack Development</Text.H2>
            <Text.Body>
              Implementing a complete design through modern frameworks like
              React Typescript, Tailwind, and Sass.
            </Text.Body>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div className="h-3 tablet-p:h-6 w-full">
              <Square className="h-full w-max" />
            </div>
            <Text.H2>Game Development</Text.H2>
            <Text.Body>
              Understanding how to create an enjoyable experience through
              feedback communication and solid gameplay loops. Creating reliable
              code and iterating as a project evolves.
            </Text.Body>
          </div>
        </div>
      </div>
    </div>
  );
};
