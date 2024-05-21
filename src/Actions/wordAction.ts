"use server";

import { db } from "@/firebase/firebase";
import { TABLE_NAME } from "@/global";
import { Data, Pair } from "@/types";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const addWordAction = async (
  fd: FormData,
  userID: string
): Promise<void> => {
  const word = String(fd.get("word"));
  const mean = String(fd.get("mean"));

  if (!(word || mean)) throw new Error("なんか入力しろ");
  const addData: Data = {
    do_remind: false,
    word: word,
    mean: mean,
    user_id: userID,
  };

  await addDoc(collection(db, TABLE_NAME), addData);
};

export const getWordAction = async (): Promise<Pair[]> => {
  const ref = await collection(db, TABLE_NAME);
  const formatted: Pair[] = [];
  await getDocs(ref).then((snap) => {
    const ids = snap.docs.map((doc) => doc.id);
    const datas = snap.docs.map((doc) => ({ ...doc.data() }));
    for (const i in ids) {
      formatted.push({
        id: ids[i],
        data: datas[i],
      });
    }
  });

  return formatted;
};
