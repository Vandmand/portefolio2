import Text from "@components/Text";
import Square from "@resources/images/decsquare.svg?react";
import Dec2 from "@resources/images/dec2.svg?react";

export const About = () => {
  return (
    <div className="w-[clamp(230px,80%,900px)] mx-[10%] h-[100vh] flex items-center">
      <div className="p-[max(5%,1rem)] gap-4 flex flex-col bg-[rgba(0,0,0,0.95)]">
        <div className="h-3 laptop:h-6 w-full">
          <Square className="h-full w-max"/>
        </div>
        <Text.Big>
          I'm a 19-year-old frontend developer and UI/UX Designer, with
          experience in web development in modern day environments, such as
          React and Figma. With the excitement and energy of the new generation
          my knowledge is ever expanding.
        </Text.Big>
        <div className="h-3 laptop:h-6 w-full flex flex-row-reverse">
          <Dec2 className="h-full w-max"/>
        </div>
      </div>
    </div>
  );
};
