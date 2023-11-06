import Text from "@components/Text";
import Arrow from "@resources/images/arrow.svg?react";
import Decoration3 from "@resources/images/dec3.svg?react";
import Decoration4 from "@resources/images/dec4.svg?react";
import placeHolder1 from "@resources/images/placeholder1.jpg";
import placeHolder2 from "@resources/images/placeholder2.jpg";
import placeHolder3 from "@resources/images/placeholder3.jpg";
import placeHolder4 from "@resources/images/placeholder4.jpg";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";

interface CardProps extends ComponentProps<"div"> {
  src?: string;
  className?: undefined;
}

const Card = (props: CardProps) => {
  return (
    <div className="relative p-[5%] blur-[1px] hover:blur-0 saturate-0 hover:saturate-100 transition-all flex flex-col">
      <img
        src={props.src}
        className="absolute w-full h-full top-0 left-0 brightness-[0.2] saturate-50 object-cover"
      />
      <div
        {...props}
        className="relative opacity-0 hover:opacity-100 w-full h-full transition-opacity z-10 p-[5%] flex flex-col"
      />
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="w-screen h-2 bg-primary" />
      <div className="bg-gradient-to-b from-base-100 to-[rgba(7,12,18,0.6)] py-16 flex-1 flex flex-row-reverse items-center">
        <div className="w-[clamp(230px,80%,900px)] mx-[10%] flex flex-col h-full gap-6">
        <div className="py-8 w-full text-right">
            <Text.H1>Projects</Text.H1>
          </div>
          <div className="grid grid-cols-1 tablet-p:grid-cols-2 gap-4 flex-1 relative">
          <div className="absolute right-0 translate-x-full px-4 w-fit h-full">
            <div className="w-3 tablet-p:w-6 h-max">
              <Decoration3 className="w-full h-max" />
            </div>
          </div>
          <div className="absolute left-0 bottom-0 -translate-x-full px-4 w-fit h-full">
            <div className="w-3 tablet-p:w-6 flex flex-col-reverse h-full">
              <Decoration4 className="w-full h-max" />
            </div>
          </div>
            <Card src={placeHolder1}>
              <div className="flex-1">
                <Text.H2>Wireframe Renderer</Text.H2>
                <Text.Body>
                  A Simple wireframe renderer created in p5 that can transform
                  3d objects in space
                </Text.Body>
              </div>
              <div className="w-full flex flex-row-reverse">
                <div className="btn btn-outline rounded-none w-fit">
                  <Link to={"/projects"}>See More</Link>
                  <Arrow className="mix-blend-difference" />
                </div>
              </div>
            </Card>
            <Card src={placeHolder2}>
              <div className="flex-1">
                <Text.H2>Vinyl</Text.H2>
                <Text.Body>
                  A mobile app using Spotify's library of songs to make a music
                  themed diary
                </Text.Body>
              </div>
              <div className="w-full flex flex-row-reverse">
                <div className="btn btn-outline rounded-none w-fit">
                  <Link to={"/projects"}>See More</Link>
                  <Arrow className="mix-blend-difference" />
                </div>
              </div>
            </Card>
            <Card src={placeHolder3}>
              <div className="flex-1">
                <Text.H2>GOS</Text.H2>
                <Text.Body>
                  A game engine in JavaScript for making simple 2d games
                </Text.Body>
              </div>
              <div className="w-full flex flex-row-reverse">
                <div className="btn btn-outline rounded-none w-fit">
                  <Link to={"/projects"}>See More</Link>
                  <Arrow className="mix-blend-difference" />
                </div>
              </div>
            </Card>
            <Card src={placeHolder4}>
              <div className="flex-1">
                <Text.H2>My portfolio</Text.H2>
                <Text.Body>
                  Exactly what you're looking at. A place to show all my work
                </Text.Body>
              </div>
              <div className="w-full flex flex-row-reverse">
                <div className="btn btn-outline rounded-none w-fit">
                  <Link to={"/projects"}>See More</Link>
                  <Arrow className="mix-blend-difference" />
                </div>
              </div>
            </Card>
          </div>
          <div className="w-full flex flex-row-reverse">
            <div className="btn btn-outline rounded-none w-fit">
              <Link to={"/projects"}>All my projects</Link>
              <Arrow className="mix-blend-difference" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
