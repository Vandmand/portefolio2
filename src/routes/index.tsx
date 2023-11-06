import Functional from "@/components/Functional";
import { Bio } from "@/components/Index/Bio";
import { Experience } from "@/components/Index/Experience";
import { About } from "@components/Index/About";
import { Contact } from "@components/Index/Contact";
import { Hero } from "@components/Index/Hero";
import { Projects } from "@components/Index/Projects";

const Index = () => {
  return (
    <Functional.MainWrapper>
      <Functional.Nav />
      <Hero />
      <About />
      <Bio />
      <Experience />
      <Projects />
      <Contact />
      <Functional.Footer />
    </Functional.MainWrapper>
  );
};

export default Index;
