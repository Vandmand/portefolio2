import Functional from "@/components/Functional";
import { Experience } from "@/components/Index/Experience";
import { Nav } from "@components/Functional/Nav";
import { About } from "@components/Index/About";
import { Contact } from "@components/Index/Contact";
import { Hero } from "@components/Index/Hero";
import { Projects } from "@components/Index/Projects";

const Index = () => {
  return (
    <Functional.MainWrapper>
      <Nav />
      <Hero />
      <div className="content flex flex-col items-center">
        <About />
        <Experience />
        <Projects />
      </div>
      <Contact />
      <footer className="w-full bg-neutral-background text-neutral-text py-10 px-32 font border-t-primary-500 border-t-4 flex items-end">
        <div className="flex flex-1 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-[1.5rem] font-medium">Pages</h4>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <p>Projects</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="uppercase text-[1.5rem] font-medium">Contact</h4>
            <div className="flex flex-col gap-2">
              <p>Email</p>
              <p>Github</p>
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
        <p className="uppercase font-treat text-[1.2rem]">Protect Trans Kids</p>
      </footer>
    </Functional.MainWrapper>
  );
};

export default Index;
