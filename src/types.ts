import { DocumentData } from "firebase/firestore";

type LoginForm = {
  mail: string;
  pw: string;
};

type Data = {
  do_remind: boolean;
  user_id: string;
  word: string;
  mean: string;
};

type Pair = {
  id: string;
  data: DocumentData;
};

export type { LoginForm, Pair, Data };
