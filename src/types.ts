type LoginForm = {
  mail: string;
  pw: string;
};

type Data = {
  word: string;
  mean: string;
};

type Pair = {
  id: string;
  data: Data;
};

export type { LoginForm, Pair };
