"use client";

import { db } from "@/firebase/firebase";
import { TABLE_NAME } from "@/global";
import { Pair } from "@/types";
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
import { useRef, useState } from "react";

const UserInfo = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);

  const addWord = async () => {
    const word = wordRef.current;
    const mean = meanRef.current;
    if (!word || !mean) throw new Error();

    await addDoc(collection(db, TABLE_NAME), {
      word: word,
      mean: mean,
    });
  };

  const getWord = async () => {
    const ref = await collection(db, TABLE_NAME);
    await getDocs(ref).then((snap) => {
      const ids = snap.docs.map((doc) => doc.id);
      const datas = snap.docs.map((doc) => ({ ...doc.data() }));
      const formatted: Pair[] = [];
      for (const i in ids) {
        const ni = parseInt(i);
        formatted.push({
          id: ids[ni],
          data: datas[ni],
        });
      }
      setPairs(formatted);
    });
  };

  getWord();

  return (
    <div>
      <div>
        単語: <input type="text" ref={wordRef} />
      </div>
      <div>
        意味: <input type="text" ref={meanRef} />
      </div>
      <button onClick={addWord}></button>
      <ul>
        {pairs.map((pair) => (
          <li key={pair.id}>
            <h2>単語: {pair.data.word}</h2>
            <h2>意味: {pair.data.mean}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
