import { Timestamp } from "firebase/firestore";

export interface ProjectInterface {
  date: Timestamp;
  tags: string[];
  description: string;
  image?: string;
  name: string;
  link?: string;
}

export interface BlogInterface {
  date: Timestamp;
  tags: string[];
  description: string;
  resources: string[];
  name: string;
  data: string;
}
