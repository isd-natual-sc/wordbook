// "use client";

// import { auth, db } from "@/firebase/firebase";
// import { TABLE_NAME } from "@/global";
// import { Data, Pair } from "@/types";
// import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";
// import { useRef, useState } from "react";

// const UserInfo = () => {
//   const [pairs, setPairs] = useState<Pair[]>([]);
//   const wordRef = useRef<HTMLInputElement>(null);
//   const meanRef = useRef<HTMLInputElement>(null);

//   const addWord = async () => {
//     const word = wordRef.current;
//     const mean = meanRef.current;
//     if (!word || !mean || !auth.currentUser) throw new Error();

//     const addData: Data = {
//       do_remind: false,
//       word: word.value,
//       mean: mean.value,
//       user_id: auth.currentUser.uid,
//     };

//     await addDoc(collection(db, TABLE_NAME), addData);
//   };

//   const getWord = async () => {
//     const ref = await collection(db, TABLE_NAME);
//     await getDocs(ref).then((snap) => {
//       const ids = snap.docs.map((doc) => doc.id);
//       const datas = snap.docs.map((doc) => ({ ...doc.data() }));
//       const formatted: Pair[] = [];
//       for (const i in ids) {
//         const ni = parseInt(i);
//         formatted.push({
//           id: ids[ni],
//           data: datas[ni],
//         });
//       }
//       setPairs(formatted);
//     });
//   };

//   getWord();

//   return (
//     <div className="flex flex-col items-center w-full">
//       <div>
//         <label className="m-1 hover:text-neutral-700">単語:</label>
//         <input
//           type="text"
//           ref={wordRef}
//           className="m-2 p-2 bg-lime-500 rounded-xl"
//         />
//       </div>
//       <div>
//         意味:
//         <input
//           type="text"
//           ref={meanRef}
//           className="m-2 p-2 bg-lime-500 rounded-xl"
//         />
//       </div>

//       <button className="bg-yellow-500 shadow" onClick={addWord}>
//         単語の登録
//       </button>
//       <ul>
//         {pairs.map((pair) => {
//           if (pair.data.user_id === auth.currentUser?.uid) {
//             return (
//               <li key={pair.id} className="flex items-center">
//                 <input type="checkbox" checked={pair.data.do_remind} readOnly />
//                 <h2 className="m-2">単語：{pair.data.word}</h2>
//                 <h2 className="m-2">意味：{pair.data.mean}</h2>
//               </li>
//             );
//           }
//         })}
//       </ul>
//     </div>
//   );
// };

// export default UserInfo;
