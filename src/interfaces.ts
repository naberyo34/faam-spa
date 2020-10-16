export interface Contribution {
  date: string;
  description?: string;
}

// TODO: 気持ち悪い
export interface PostFarm {
  author: string;
  title: string;
  contributions: Contribution[]; 
}

export interface FarmDocument {
  _id: string;
  author: string;
  title: string;
  contributions: Contribution[]; 
}
