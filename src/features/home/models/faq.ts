export interface FaqQuestion {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}