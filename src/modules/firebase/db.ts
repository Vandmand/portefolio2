import {
  QueryConstraint,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "./config";
import { ProjectInterface } from "./types";

const projectCollection = collection(db, "projects");

export const getProjectsWithQuery = async (constraints: QueryConstraint[]) => {
  const snapshots = await getDocs(query(projectCollection, ...constraints));

  const projects: ProjectInterface[] = [];
  snapshots.forEach((project) => {
    const data = project.data() as ProjectInterface;
    projects.push(data);
  });

  return projects;
};
