"use client";
import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuth = () => {
  return (
    <div>
      <button
        onClick={() =>
          signInWithPopup(auth, provider)
            .then(() => alert("Success :D"))
            .catch((err) => alert(err))
        }
        className="p-2 border-teal-500"
      >
        Googleでサインイン
      </button>
    </div>
  );
};

export default GoogleAuth;
