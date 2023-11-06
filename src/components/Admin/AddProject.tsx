import { FormEvent, ChangeEvent, useState } from "react";
import Text from "@components/Text";
import { TagList } from "../Projects/TagList";
import { collection, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/modules/firebase/config";

export const AddProject = () => {
  const [config, setConfig] = useState({
    name: "",
    description: "",
    date: new Timestamp(0,0),
    tags: [] as string[],
  });

  const addProject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDoc(doc(collection(db, 'projects'), config.name), config)
  };

  return (
    <div className="bg-base-100 p-8 rounded-md border-primary border-2 flex flex-col gap-8">
      <Text.H2>Add Project</Text.H2>
      <form onSubmit={addProject} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Project Name"
          className="input input-bordered"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConfig({ ...config, name: e.target.value });
          }}
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Project description"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setConfig({ ...config, description: e.target.value });
          }}
        />
        <input type="date" className="input input-bordered" onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setConfig({ ...config, date: new Timestamp((e.target.valueAsDate?.getTime() ?? 1) / 1000 , 0) });
        }} />
        <div className="flex flex-col gap-4">
          <Text.Big>Tags</Text.Big>
          <TagList
            onChange={(e: string[]) => {
              setConfig({ ...config, tags: e });
            }}
          />
        </div>
        <button type="submit" className="btn btn-outline">
          Create Project
        </button>
      </form>
    </div>
  );
};
