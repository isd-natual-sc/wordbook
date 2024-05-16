"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import ServerUserInfo from "./ServerUserInfo";
// import UserInfo from "./UserInfo";

const Auth = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <div>
          <Link href={"/auth/signout"} className="text-xl p-2 m-2">
            サインアウトする
          </Link>
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
