import Text from "@/components/Text";
import Functional from "../Functional";

export const Experience = () => {
  return (
    <Functional.Section className="about">
      <div className="w-2/3 flex relative h-fit">
        <Functional.SectionCover className="flex flex-col gap-8">
          <Text.H1 className="absolute top-[-0.5ch] left-[-0.2ch]">
            Experience
          </Text.H1>
          <div className="flex flex-col gap-2">
            <Text.H2>UI/UX Design</Text.H2>
            <Text.Body>
              Understanding a problem and designing a user experience, conveying
              the desired information through a solid and understandable style.
              Planning out and visualizing said design through wireframes, brand
              boards, in programs like Figma.
            </Text.Body>
          </div>
          <div className="flex flex-col gap-2">
            <Text.H2>Fullstack Development</Text.H2>
            <Text.Body>
              Implementing a complete design through modern frameworks like
              React Typescript, Tailwind, and Sass.
            </Text.Body>
          </div>
          <div className="flex flex-col gap-2">
            <Text.H2>Game Development</Text.H2>
            <Text.Body>
              Understanding how to create an enjoyable experience through
              feedback communication and solid gameplay loops. Creating reliable
              code and iterating as a project evolves.
            </Text.Body>
          </div>
        </Functional.SectionCover>
      </div>
    </Functional.Section>
  );
};
