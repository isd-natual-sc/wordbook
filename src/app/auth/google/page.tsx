"use client";
import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const GoogleAuth = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() =>
          signInWithPopup(auth, provider)
            .then(() => alert("Success :D"))
            .then(() => router.push("/"))
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
