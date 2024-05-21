"use client";

import { addWordAction, getWordAction } from "@/Actions/wordAction";
import { auth } from "@/firebase/firebase";
import { Pair } from "@/types";
import { useEffect, useRef, useState } from "react";
// import WordList from "./WordList";

const ServerUserInfo = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);

  const [flag, setFlag] = useState<number>(0);

  const getWord = async () => {
    const res = await getWordAction();
    setPairs(res);
  };

  useEffect(() => {
    getWord().then(() => {
      wordRef.current!.value = "";
      meanRef.current!.value = "";
    });
  }, [flag]);

  return (
    <div>
      <form
        action={(fd) =>
          addWordAction(fd, auth.currentUser!.uid).then(() => {
            setFlag(flag + 1);
          })
        }
        className="flex flex-col items-center w-full"
      >
        <div>
          <label className="m-1 hover:text-neutral-700">単語:</label>
          <input
            ref={wordRef}
            type="text"
            name="word"
            className="m-2 p-2 bg-lime-500 rounded-xl"
          />
        </div>
        <div>
          意味:
          <input
            ref={meanRef}
            type="text"
            name="mean"
            className="m-2 p-2 bg-lime-500 rounded-xl"
          />
        </div>

        <button className="bg-yellow-500 shadow" type="submit">
          単語の登録
        </button>
      </form>
      <ul className="py-5 my-5">
        {pairs.map((pair) => {
          if (pair.data.user_id === auth.currentUser?.uid) {
            return (
              <li
                key={pair.id}
                className="flex justify-center items-center my-5"
              >
                <input type="checkbox" checked={pair.data.do_remind} readOnly />
                <div className="flex flex-col items-center">
                  <h2>{pair.data.word}</h2>
                  <h2>{pair.data.mean}</h2>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ServerUserInfo;
