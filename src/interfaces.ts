export interface Contribution {
  date: string;
  description: string;
}

export interface FarmDocument {
  _id: string;
  author: string;
  title: string;
  contributions: Contribution[]; 
}
