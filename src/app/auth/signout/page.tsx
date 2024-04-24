"use client";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

const page = () => {
  return (
    <div>
      <button onClick={() => signOut(auth).then(() => alert("Success D:"))}>
        サインアウトする
      </button>
    </div>
  );
};

export default page;
