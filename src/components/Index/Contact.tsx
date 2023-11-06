import Text from "@components/Text";

export const Contact = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-neutral-text">
      <Text.H1>Contact Me</Text.H1>
      <h3 className="uppercase font-bdo-grotesk text-fxl tablet-p:text-bxl desktop:text-hmd">
        eliaskulmbak@pm.me
      </h3>
    </div>
  );
};
