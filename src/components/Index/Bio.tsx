import Decoration3 from "@resources/images/dec3.svg?react";
import DecorationPlus from "@resources/images/decplus.svg?react";
import portrait from "@resources/images/portrait2.png";

export const Bio = () => {
  return (
    <div className="h-screen flex items-center justify-end">
      <div className="flex flex-col tablet:flex-row-reverse w-[clamp(230px,80%,900px)] mx-[10%] tablet:items-end">
        <div className="flex gap-2">
          <div className="m-4 w-6 tablet-p:w-8 h-max max-h-full">
            <Decoration3 className="w-full h-max" />
          </div>
          <div className="bg-gradient-to-b to-primary from-primary-950 h-[clamp(250px, 100%, 420px)]">
            <img
              src={portrait}
              alt="portrait"
              className="mix-blend-darken h-full object-cover"
            />
          </div>
          <div className="m-4 w-6 tablet-p:w-10 h-full flex items-end">
            <DecorationPlus className="w-full h-fit" />
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex items-center gap-2">
            <p className="font-firacode text-fxl tablet-p:text-bxl laptop:text-hmd">{"<BIO>"}</p>
            <div className="flex-1 h-0 border-t-2" />
          </div>
          <div className="text-fsm tablet-p:text-bsm laptop:text-bmd flex flex-col gap-4">
          <p className="font-semibold font-bdo-grotesk">{"Ellie Kulmbak"}</p>
          <p className="font-thin font-bdo-grotesk">
            {
              "General Physics & Mathematics at NEXT HTX Copenhagen - 2019-2023  "
            }
          </p>
          <p className="font-thin font-bdo-grotesk">{"ASU (Academy for Societally Engaged Youth)  - 2020-2021"}</p>
            </div>
        </div>
      </div>
    </div>
  );
};
