"use client";

import { auth } from "@/firebase/firebase";
import { LoginForm } from "@/types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";

const MailSignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      mail: "",
      pw: "",
    },
  });

  const signIn: SubmitHandler<LoginForm> = async (data) => {
    await signInWithEmailAndPassword(auth, data.mail, data.pw).then(() =>
      alert("Success :D!")
    );
  };
  const createUser: SubmitHandler<LoginForm> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.mail, data.pw).then(() =>
        alert("Success :D")
      );
    } catch (err1) {
      try {
        signIn(data);
      } catch (err2) {
        console.error(err1 + " & " + err2);
      }
    }
  };
  return (
    <form
      className="m-5 flex flex-col justify-center items-center"
      onSubmit={handleSubmit((data) => createUser(data))}
    >
      <div className="p-2 m-5">
        <label className="m-2">メールアドレス</label>
        <input
          type="email"
          {...register("mail", { required: "メールアドレスは必須です。" })}
          className=" text-2xl border-teal-500 border rounded-xl"
        />
        <div className="text-red-900">{errors.mail?.message}</div>
      </div>
      <div className="p-2 m-5">
        <label className="m-2">パスワード</label>
        <input
          type="password"
          {...register("pw", {
            required: "パスワードは必須です。",
            minLength: {
              value: 10,
              message: "パスワードは10文字以上で設定してください",
            },
          })}
          className="text-2xl border-red-500 border rounded-xl"
        />
        <div className="text-red-900">{errors.pw?.message}</div>
      </div>
      <button type="submit" className="p-2 m-5 bg-amber-100 shadow">
        このメールアドレスでサインイン
      </button>
    </form>
  );
};

export default MailSignIn;
