export interface Contribution {
  date: Date;
  description: string;
}

export interface FarmDocument {
  _id: string;
  author: string;
  title: string;
  contributions: Contribution[]; 
}
