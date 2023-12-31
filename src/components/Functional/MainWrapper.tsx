import { ComponentProps } from "react";
import  BackgroundImage  from "@resources/images/main-background.svg?react";

interface MainWrapperProps extends ComponentProps<"main"> {}

export const MainWrapper = (props: MainWrapperProps) => {
  return (
    <div className="relative flex flex-col bg-neutral-background -z-0 text-neutral-text min-h-screen">
      <div className="absolute -z-10 object-cover w-full h-full mix-blend-hard-light overflow-hidden">
        <BackgroundImage className="mix-blend-hard-light" />
      </div>
      <main {...props} />
    </div>
  );
};
