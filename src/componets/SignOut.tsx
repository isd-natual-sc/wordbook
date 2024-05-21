import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        signOut(auth)
          .then(() => alert("Success D:"))
          .then(() => router.push("/"))
          .catch((err) => console.error(err))
      }
      className="mx-auto text-white shadow-md bg-yellow-900"
    >
      サインアウトする
    </button>
  );
};

export default SignOut;
