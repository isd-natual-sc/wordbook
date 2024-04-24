"use client";

import { auth } from "@/firebase/firebase";
import { LoginForm } from "@/types";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const MailSignIn = () => {
  const mailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const rule = z.object({
    mail: z.string().email(),
    pw: z.string().min(10),
  });

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

  const signIn: SubmitHandler<LoginForm> = (data) => {
    signInWithEmailAndPassword(auth, data.mail, data.pw).then(() =>
      alert("Success :D")
    );
  };
  return (
    <form
      className="m-5 flex flex-col justify-center items-center"
      onSubmit={handleSubmit((data) => signIn(data))}
    >
      <div className="p-2 m-5">
        <label className="m-2">メールアドレス</label>
        <input
          type="email"
          {...register("mail", { required: true })}
          className=" text-2xl border-teal-500 border"
        />
      </div>
      <div className="p-2 m-5">
        <label className="m-2">パスワード</label>
        <input
          type="password"
          {...register("pw", { required: true, minLength: 10 })}
          className="text-2xl border-red-500 border"
        />
      </div>
      {errors.pw?.message && <h2>Okay</h2>}
      <button type="submit" className="p-2 m-5 bg-amber-100 shadow">
        このメールアドレスでサインイン
      </button>
    </form>
  );
};

export default MailSignIn;
