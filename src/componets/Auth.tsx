"use client";

import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ServerUserInfo from "./ServerUserInfo";
import GoogleAuth from "./SignUpWithGoogle";
// import UserInfo from "./UserInfo";

const Auth = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <div>
          {/* <UserInfo /> */}
          <ServerUserInfo />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <GoogleAuth />
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
