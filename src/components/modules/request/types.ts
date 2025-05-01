// types.ts
export type QuestionType =
  | "multiple-choice"
  | "text-input"
  | "phone-input"
  | "email-input";

export type Choice = {
  id: string;
  label: string;
};

export type Question = {
  id: string;
  title: string;
  type: QuestionType;
  required?: boolean;
  description?: string;
  choices?: Choice[];
  placeholder?: string;
  countryCode?: string;
};

export type Step = {
  number: number;
  question: Question;
};

export type FormValues = Record<string, string | boolean | number>;