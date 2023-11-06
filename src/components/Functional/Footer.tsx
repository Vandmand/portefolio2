import Text from "@components/Text";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t-8 border-primary bg-base-100 p-8 flex flex-col gap-4">
      <div className="w-[clamp(230px,80%,900px)] flex flex-col phone:flex-row mx-[10%] gap-8">
        <div className="flex flex-col gap-4">
          <Text.FooterH>Pages</Text.FooterH>
          <div className="flex flex-col gap-2">
            <Text.FooterL><Link to={"/"}>Home</Link></Text.FooterL>
            <Text.FooterL><Link to={"/Projects"}>Projects</Link></Text.FooterL>
            <Text.FooterL><Link to={"/Blog"}>Blog</Link></Text.FooterL>
            <Text.FooterL><Link to={"/Contact"}>Contact</Link></Text.FooterL>
            <Text.FooterL><Link to={"/Admin"}>Admin</Link></Text.FooterL>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-max">
          <Text.FooterH>Contact</Text.FooterH>
          <div className="flex flex-col gap-2">
            <Text.FooterL><Link to={""} >Email</Link></Text.FooterL>
            <Text.FooterL><Link to={""} >Github</Link></Text.FooterL>
            <Text.FooterL><Link to={""} >LinkedIn</Link></Text.FooterL>
          </div>
        </div>
      </div>
      <p className="uppercase font-treat text-[1rem] w-full text-right">Protect Trans Kids</p>
    </footer>
  );
};
