"use client";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  return (
    <div>
      <button
        onClick={() =>
          signOut(auth)
            .then(() => alert("Success D:"))
            .catch((err) => console.error(err))
        }
      >
        サインアウトする
      </button>
    </div>
  );
};

export default SignOut;
