import Text from "@/components/Text";
import { db } from "@/modules/firebase/config";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { useState, useEffect, useRef, ReactNode } from "react";
import PlusIcon from "@resources/images/plus.svg?react";

interface TagProps {
  onRemove: () => void;
  children?: ReactNode
}
const Tag = (props: TagProps) => {
  const Modal = useRef<HTMLDialogElement>(null)

  return (
    <> 
      <button onClick={() => {
        if(Modal.current) {Modal.current.showModal()}
      }} className="btn btn-outline hover:line-through rounded-full">
        <p children={props.children} className=""/>
      </button>
      <dialog ref={Modal} className="modal">
        <div className="modal-box flex flex-col gap-4">
          <div className="col-span-2 text-center">
          <Text.Big>Are you sure?</Text.Big>
          </div>
          <form method="dialog" className="grid grid-cols-2 gap-4">
          <button className="btn btn-outline btn-error" onClick={props.onRemove}>Delete</button>
          <button className="btn btn-ghost">cancel</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export const Tags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const getTags = () => {
      getDocs(collection(db, "tags")).then((res) => {
        const data = res.docs.map((doc) => doc.id);
        setTags(data);
      });
    };
    getTags();
  }, []);

  const handleRemove = (id: string) => {
    deleteDoc(doc(collection(db, "tags"), id)).then(() => {
      const copy = [...tags];
      copy.splice(copy.indexOf(id), 1);
      setTags(copy);
    });
  };

  const handleCreate = (id: string) => {
    setDoc(doc(collection(db, "tags"), id), {}).then(() => {
      const copy = [...tags];
      copy.push(id)
      setTags(copy);
    })
  }

  const renderTags = () => {
    return tags.map((tag) => (
      <Tag
        onRemove={() => {
          handleRemove(tag);
        }}
        key={tag}
        children={tag}
      />
    ));
  };

  return (
    <div className="bg-base-100 p-8 rounded-md border-primary border-2">
      <div className="h-full flex-col gap-8 flex">
        <Text.H2>Manage Tags:</Text.H2>
        <div className="flex flex-wrap gap-4">
          {renderTags()}
          <button onClick={() => {modalRef.current?.showModal()}}>
            <PlusIcon />
          </button>
          <dialog className="modal" ref={modalRef}>
            <div className="modal-box flex gap-4">
              <input type="text" className="input input-bordered flex-1" placeholder="Tag Name" id="addTagInput"/>
              <form method="dialog">
              <button className="btn btn-outline btn-success" onClick={() => {handleCreate((document.getElementById("addTagInput") as HTMLInputElement).value)}}>Create</button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
