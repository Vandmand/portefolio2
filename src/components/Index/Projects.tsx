import Functional from "@components/Functional";
import Text from "@components/Text";
import { ComponentProps } from "react";
import placeHolder1 from "@resources/images/placeholder1.jpg";
import placeHolder2 from "@resources/images/placeholder2.jpg";
import placeHolder3 from "@resources/images/placeholder3.jpg";
import placeHolder4 from "@resources/images/placeholder4.jpg";

interface CardProps extends ComponentProps<"div"> {
  src?: string
}

const Card = (props: CardProps) => {
  const attributes = { ...props };

  return (
    <div className="card relative text-neutral-text p-4 blur-[1px] hover:blur-0 saturate-0 hover:saturate-100 transition-all">
      <img src={props.src} className="absolute w-full h-full top-0 left-0 brightness-[0.2] saturate-50 object-cover"/>
      <div className="relative opacity-0 hover:opacity-100 w-full h-full transition-opacity z-10">
        <div {...attributes} />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <Functional.Section className="projects justify-end">
      <div className="w-2/3 flex relative h-fit">
        <div className="absolute -inset-1 bg-gradient-to-b from-primary-700 to-[transparent]"></div>
        <div className="text-neutral-text w-full bg-neutral-background z-10 flex flex-col px-8 pt-20 pb-8 gap-4">
          <Text.H1 className="absolute top-[-0.5ch] right-[-0.2ch]">
            Projects
          </Text.H1>
          <div className="card">
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <Card className="flex flex-col" src={placeHolder1}>
                <Text.H2>Wireframe Renderer</Text.H2>
                <Text.Body>
                  A Simple wireframe renderer created in p5 that can transform
                  3d objects in space
                </Text.Body>
              </Card>
              <Card className="flex flex-col" src={placeHolder2}>
                <Text.H2>Vinyl</Text.H2>
                <Text.Body>
                  A mobile app using Spotify's library of songs to make a music
                  themed diary
                </Text.Body>
              </Card>
              <Card className="flex flex-col" src={placeHolder3}>
                <Text.H2>GOS</Text.H2>
                <Text.Body>
                  A game engine in JavaScript for making simple 2d games
                </Text.Body>
              </Card>
              <Card className="flex flex-col" src={placeHolder4}>
                <Text.H2>My portfolio</Text.H2>
                <Text.Body>
                  Exactly what you're looking at. A place to show all my work
                </Text.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Functional.Section>
  );
};
