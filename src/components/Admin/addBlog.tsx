import { FormEvent, ChangeEvent, useState } from "react";
import Text from "@components/Text";
import { TagList } from "../Projects/TagList";
import { collection, setDoc, doc, Timestamp } from "firebase/firestore";
import { db } from "@/modules/firebase/config";

export const AddBlog = () => {
  const [config, setConfig] = useState({
    name: "",
    description: "",
    date: new Timestamp(0, 0),
    tags: [] as string[],
    data: "",
  });

  // const [resources, setResources] = useState<string[]>([]);

  const addProject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDoc(doc(collection(db, "blog"), config.name), config);
  };

  const parseFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0] as Blob

    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setConfig({...config, data: e.target?.result as string})
    }
    reader.readAsText(file)
    
  }

  return (
    <div className="bg-base-100 p-8 rounded-md border-primary border-2 flex flex-col gap-8">
      <Text.H2>Add Blog</Text.H2>
      <form onSubmit={addProject} className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Blog Title"
          className="input input-bordered"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConfig({ ...config, name: e.target.value });
          }}
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Short description"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setConfig({ ...config, description: e.target.value });
          }}
        />
        <input
          type="date"
          className="input input-bordered"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setConfig({
              ...config,
              date: new Timestamp(
                (e.target.valueAsDate?.getTime() ?? 1) / 1000,
                0
              ),
            });
          }}
        />
        <input type="file" onChange={parseFile} className="file-input file-input-bordered" />
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
