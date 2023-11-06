import Functional from "@/components/Functional";
import { TagList } from "@/components/Projects/TagList";
import Text from "@/components/Text";
import { getProjectsWithQuery } from "@/modules/firebase/db";
import { ProjectInterface } from "@/modules/firebase/types";
import { where } from "firebase/firestore";
import { useEffect, useState } from "react";

const Projects = () => {
  const [sort, setSort] = useState<string>("Newest first");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  useEffect(() => {
    const getProjects = () => {
      const queries = activeTags.map((tag) => where("tags", "array-contains", tag.toLowerCase()));
      getProjectsWithQuery(queries).then(setProjects);
    };

    getProjects();
  }, [sort, activeTags]);

  const renderProjects = () => {
    return projects.map((projectData) => {
      return (
        <div className="p-4 flex flex-col gap-4">
          <Text.H2>{projectData.name}</Text.H2>
          <Text.Body>{projectData.description}</Text.Body>
          <div className="flex flex-wrap">
          {projectData.tags.map((tag) => (
            <div className="py-2 px-4 rounded-full border-2 border-base-content">
              <Text.Body>{tag[0].toUpperCase() + tag.slice(1)}</Text.Body>
            </div>
          ))}
          </div>
        </div>
      );
    });
  };

  return (
    <Functional.MainWrapper className="flex flex-col">
      <Functional.Nav />
      <div className="min-h-screen mt-24">
        <div className="flex flex-col tablet:flex-row p-8 gap-4">
          <aside className="flex-1 bg-base-100 p-8 border-2 border-primary rounded-md">
            <Text.H2>Sort by</Text.H2>
            <Functional.Dropdown
              options={["Newest First", "Oldest First"]}
              initialValue="Newest First"
              onChange={setSort}
            />
            <Text.H2>Filter</Text.H2>
            <TagList onChange={(tags) => {setActiveTags(tags)}}/>
          </aside>
          <div className="bg-base-100/90 flex-1 laptop:flex-grow-[2] p-8 grid tablet-p:grid-cols-2 rounded-md">
            {renderProjects()}
          </div>
        </div>
      </div>
      <Functional.Footer />
    </Functional.MainWrapper>
  );
};

export default Projects;
