import { auth } from "@/firebase/firebase";
import { Pair } from "@/types";

const WordList = ({ pairs }: { pairs: Pair[] }) => {
  return (
    <ul className="py-5 my-5">
      {pairs.map((pair) => {
        if (pair.data.user_id === auth.currentUser?.uid) {
          return (
            <li key={pair.id} className="flex justify-center items-center my-5">
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
  );
};

export default WordList;
