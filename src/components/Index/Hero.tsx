import portraitOne from "@resources/images/portrait1.png";
import Text from "@components/Text";
import GlobeIcon from "@resources/images/globe.svg?react";
import CodeIcon from "@resources/images/code.svg?react";
import { TextScramble } from "../Animation/textScramble";
import { animated, useSpring } from "@react-spring/web";

export const Hero = () => {

  const titleSpring = useSpring(
    {
      from: {
        y : "50%",
        filter: "opacity(0%)"
      },
      to: {
        y: "0%",
        filter: "opacity(100%)"
      }
    }
  )

  return (
    <div className="hero h-screen flex flex-col items-center justify-center w-[clamp(260px,80%,1000px)] m-auto gap-2">
      <div className="flex flex-row items-center gap-2 w-full">
        <div className="h-full aspect-square">
          <CodeIcon className="h-full w-full" />
        </div>
        <div className="flex flex-col">
          <Text.decoration.Top>
            <TextScramble range={[0x61, 0x7a]}>Ux/UI Designer</TextScramble>
          </Text.decoration.Top>
          <Text.decoration.Top>
            <TextScramble range={[0x61, 0x7a]}>
              Front end developer
            </TextScramble>
          </Text.decoration.Top>
        </div>
      </div>
      <div className="relative z-10 h-[clamp(300px,50%,460px)] w-full">
        <div className="bg-gradient-to-b to-primary from-primary-950 relative h-full flex items-end justify-center">
          <img
            src={portraitOne}
            alt="portrait"
            className="mix-blend-hard-light absolute h-[90%] object-cover"
          />
          <animated.p style={{...titleSpring}} className="font-treat text-tsm tablet:text-txl laptop:text-[8rem]/[9rem] mix-blend-color-burn text-[#411122]">
            IM ELLIE
          </animated.p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-2 w-full">
        <div className="flex flex-col items-end">
          <Text.decoration.Bottom1>
            <TextScramble>Copenhagen, Denmark</TextScramble>
          </Text.decoration.Bottom1>
          <Text.decoration.Bottom2>
            <TextScramble>55.676098-N 12.568337-E</TextScramble>
          </Text.decoration.Bottom2>
        </div>
        <div className="h-full aspect-square">
          <GlobeIcon className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
