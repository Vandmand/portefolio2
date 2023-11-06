import { useState, useEffect, ChangeEvent } from "react";
import PlusIcon from "@resources/images/plus.svg?react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/modules/firebase/config";

export const TagList = (props: { onChange: (tags: string[]) => void }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    getDocs(collection(db, "tags")).then((docs) => {
      const docNames: string[] = [];
      docs.forEach((doc) => docNames.push(doc.id.toLowerCase()));
      setAllTags(docNames);
    });
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

  const handleAdd = (id : string) => {
    const copy = [...tags];
    copy.push(id);
    setTags(copy);
    props.onChange(copy)
  }

  const handleRemove = (id: string) => {
    const copy = [...tags];
    copy.splice(copy.indexOf(id), 1);
    setTags(copy);
    props.onChange(copy)
  };

  const renderTags = () => {
    return tags.map((tag) => (
      <button
        onClick={() => {
          handleRemove(tag);
        }}
        className="btn btn-outline hover:line-through rounded-full"
        key={tag}
      >
        {tag}
      </button>
    ));
  };

  const renderAllTags = (match: string) => {
    return allTags
      .filter((tag) => tag.includes(match.toLowerCase()))
      .map((tag) => (
        <button
          onClick={() => {
            handleAdd(tag)
          }}
          className="btn btn-ghost w-full"
          key={tag}
        >
          {tag}
        </button>
      ));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {renderTags()}
      <div className="dropdown">
        <button className="btn btn-square btn-ghost rounded-full" tabIndex={0}>
          <PlusIcon />
        </button>
        <div className="dropdown-content bg-base-100 p-4 flex flex-col gap-8">
          <input type="text" className="input input-bordered" onChange={handleSearch} placeholder="Search for tags" />
          <ul className="flex flex-col gap-2">{renderAllTags(searchString)}</ul>
        </div>
      </div>
    </div>
  );
};
