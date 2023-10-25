import Text from "@components/Text";
import Portrait2 from "@resources/images/portrait2.png";

export const About = () => {
  return (
    <div className="about flex flex-row gap-4 justify-end max-w-[66%] min-h-screen items-center">
      <Text.Big className="w-1/3 text-right">
        I'm a 19-year-old frontend developer, with a thirst for knowledge,
        systems and design. I thrive in the modern, new, and experimental, and love
        pushing the boundaries of what I can achieve.
      </Text.Big>
      <div className="bg-gradient-to-b from-primary-950 to-primary-400 w-fit h-fit">
        <img src={Portrait2} alt="Portrait" className="mix-blend-darken" />
      </div>
    </div>
  );
};
