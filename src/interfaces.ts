export interface Contribution {
  date: number;
  description: string;
}

export interface FarmDocument {
  _id: string;
  author: string;
  title: number;
  contributions: Contribution[]; 
}
