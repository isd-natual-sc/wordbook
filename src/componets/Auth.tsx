"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import UserInfo from "./UserInfo";

const Auth = () => {
  const user = useAuthState(auth);
  return (
    <div>
      {user ? (
        <div>
          <Link href={"/auth/signout"}>サインアウトする</Link>
          <UserInfo />
        </div>
      ) : (
        <div>
          <Link href={"/auth/google"}>Googleでサインイン</Link>
          <Link href={"/auth/mail"}>メールとパスワードでサインイン</Link>
        </div>
      )}
    </div>
  );
};

export default Auth;
