"use client";

import { addWordAction, getWordAction } from "@/Actions/wordAction";
import { auth } from "@/firebase/firebase";
import { Pair } from "@/types";
import { useRef, useState } from "react";

const ServerUserInfo = () => {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const wordRef = useRef<HTMLInputElement>(null);
  const meanRef = useRef<HTMLInputElement>(null);

  const getWord = async () => {
    const res = await getWordAction();
    setPairs(res);
  };

  getWord();

  return (
    <div>
      <form
        action={(fd) => addWordAction(fd, auth.currentUser?.uid)}
        className="flex flex-col items-center w-full"
      >
        <div>
          <label className="m-1 hover:text-neutral-700">単語:</label>
          <input
            type="text"
            ref={wordRef}
            className="m-2 p-2 bg-lime-500 rounded-xl"
          />
        </div>
        <div>
          意味:
          <input
            type="text"
            ref={meanRef}
            className="m-2 p-2 bg-lime-500 rounded-xl"
          />
        </div>

        <button className="bg-yellow-500 shadow" type="submit">
          単語の登録
        </button>
      </form>

      <ul>
        {pairs.map((pair) =>
          pair.data.user_id === auth.currentUser?.uid ? (
            <li key={pair.id}>
              <input type="checkbox" checked={pair.data.do_remind} />
              <div className="flex items-center">
                <h2>{pair.data.word}</h2>
                <h2>{pair.data.mean}</h2>
              </div>
            </li>
          ) : (
            <div key={"None"}>None</div>
          )
        )}
      </ul>
    </div>
  );
};

export default ServerUserInfo;
