"use client";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() =>
          signOut(auth)
            .then(() => alert("Success D:"))
            .then(() => router.push("/"))
            .catch((err) => console.error(err))
        }
      >
        サインアウトする
      </button>
    </div>
  );
};

export default SignOut;
