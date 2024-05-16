"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import ServerUserInfo from "./ServerUserInfo";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
// import UserInfo from "./UserInfo";

const Auth = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  return (
    <div>
      {user ? (
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
          {/* <UserInfo /> */}
          <ServerUserInfo />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Link href={"/auth/google"} className="m-2 p-2">
            <span className="p-2 text-xl shadow border bg-blue-400 hover:font-medium">
              Googleでサインイン
            </span>
          </Link>
          <Link href={"/auth/mail"} className="m-2 p-2">
            <span className="p-2 text-xl shadow border bg-blue-300 hover:font-medium">
              メールとパスワードでサインイン
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Auth;
