import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "@/modules/firebase/config";
import Text from "@/components/Text";

export const Auth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  auth.onAuthStateChanged(setCurrentUser);

  const logIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.target as typeof e.target & {
      "0": HTMLInputElement;
      "1": HTMLInputElement;
    };

    signInWithEmailAndPassword(auth, elements[0].value, elements[1].value);
  };

  return (
    <div className="grid laptop:grid-cols-2 bg-base-100 p-8 rounded-md border-primary border-2 gap-8">
      <form
        onSubmit={logIn}
        className="flex flex-col gap-4 max-w-[400px]"
        >
        <div className="field flex-col flex gap-2">
          <Text.Big><label>Email</label></Text.Big>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="field flex-col flex gap-2">
          <Text.Big><label>Password</label></Text.Big>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <button type="submit" className="btn btn-outline">Submit</button>
      </form>
      <div className="flex flex-col items-end">
        <Text.H2>Logged In as:</Text.H2>
        <Text.Body>{currentUser?.email ?? ""}</Text.Body>
      </div>
    </div>
  );
};
