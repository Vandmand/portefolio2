import Text from "@/components/Text";
import { Link } from "react-router-dom";
import Hambgr from '@resources/images/hambgr.svg?react'

export const Nav = () => {
  return (
    <nav className="fixed w-screen flex justify-center items-center z-50 transition-colors hover:bg-base-100 tablet:bg-transparent bg-base-100 px-[5%] py-[1%] gap-16">
      <div className="">
        <p className="font-bdo-grotesk font-extralight uppercase text-fxl laptop:text-bsm desktop:text-bxl">
          - portfolio -
        </p>
      </div>
      <div className="flex-1 py-8 px-4 flex flex-row-reverse dropdown tablet:dropdown-open">
        <button tabIndex={0} className="tablet:hidden">
          <Hambgr />
        </button>
        <div tabIndex={0} className="max-w-[1000px] w-full min-w-[250px] tablet:-translate-y-1/2 flex flex-col tablet:flex-row text-center dropdown-content tablet:bg-transparent bg-base-100 gap-4 py-8 tablet:shadow-none shadow-md">
          <div className="flex-1">
            <Text.Link>
              <Link to={"/"}>Home</Link>
            </Text.Link>
          </div>
          <div className="flex-1">
            <Text.Link>
              <Link to={"/projects"}>Projects</Link>
            </Text.Link>
          </div>
          <div className="flex-1">
            <Text.Link>
              <Link to={"/blog"}>Blog</Link>
            </Text.Link>
          </div>
          <div className="flex-1">
            <Text.Link>
              <Link to={"/contact"}>Contact</Link>
            </Text.Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
