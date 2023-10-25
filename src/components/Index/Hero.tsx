import portraitOne from "@resources/images/portrait1.png";

export const Hero = () => {
  return (
    <div className="hero min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col justify-center content-center w-3/5 gap-2">
        <div className="flex flex-row-reverse text-right text-secondary-400 font-bdo-grotesk text-[2rem] leading-6 uppercase">
          <p className="font-bold">2017</p>
          <p className="tracking-[1rem] font-thin">since:</p>
        </div>
        <div className="aspect-video relative z-10">
          <p className="text-secondary-400 absolute top-[-0.5ch] left-[-0.2ch] font-treat text-[128px] -z-10">
            Developer
          </p>
          <div className="bg-gradient-to-b from-primary-950 to-primary-400 h-full w-full flex items-end justify-center relative">
            <img
              src={portraitOne}
              alt="portrait"
              className="mix-blend-hard-light absolute"
            />
            <p className="font-treat text-[10rem] mix-blend-color-burn text-[#411122] leading-[10rem]">
              IM ELLIE
            </p>
          </div>
          <p className="text-secondary-400 absolute bottom-[-0.5ch] right-[-0.2ch] font-treat text-[8rem] -z-10">
            Designer
          </p>
        </div>
        <div className="text-secondary-400 font-bdo-grotesk text-[1.5rem] leading-6">
          <p className="font-black ">COPENHAGEN, DENMARK</p>
          <p className="text-[1.5rem]">55.676098, 12.568337</p>
        </div>
      </div>
    </div>
  );
};
