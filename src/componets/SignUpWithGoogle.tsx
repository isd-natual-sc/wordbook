"use client";
import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const GoogleAuth = () => {
  const router = useRouter();
  return (
    <div>
      <button
        className="p-2 text-xl shadow border bg-blue-300 hover:font-medium"
        onClick={() =>
          signInWithPopup(auth, provider)
            .then(() => alert("Success :D"))
            .then(() => router.push("/"))
            .catch((err) => alert(err))
        }
      >
        Googleでサインイン
      </button>
    </div>
  );
};

export default GoogleAuth;
