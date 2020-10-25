export interface QuizState {
  score: number;
  questions: Question[];
  currentQuestion: number;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  isCorrect?: boolean;
}
