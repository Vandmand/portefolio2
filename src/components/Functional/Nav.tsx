import Text from "@/components/Text";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="fixed w-screen flex justify-center z-50 transition-colors hover:bg-neutral-background">
      <div className="w-3/5 text-neutral-text flex text-center py-8 px-4 ">
        <Text.Link className="flex-1">
          <Link to={"/"}>Home</Link>
        </Text.Link>
        <Text.Link className="flex-1">
          <Link to={"/projects"}>Projects</Link>
        </Text.Link>
        <Text.Link className="flex-1">
          <Link to={"/blog"}>Blog</Link>
        </Text.Link>
        <Text.Link className="flex-1">
          <Link to={"/contact"}>Contact</Link>
        </Text.Link>
      </div>
    </nav>
  );
};
