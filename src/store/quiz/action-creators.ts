import { QuizActions, QuizType } from "./action";
import { Question } from "./types";

export const updateScore = (score: number): QuizType => ({
  type: QuizActions.UPDATE_SCORE,
  payload: {
    score,
  },
});

export const fetchQuestions = (): QuizType => ({
  type: QuizActions.FETCH_QUESTIONS,
});

export const fetchQuestionsSuccess = (questions: Question[]): QuizType => ({
  type: QuizActions.FETCH_QUESTIONS_SUCCESS,
  payload: {
    questions,
  },
});

export const clearAll = (): QuizType => ({
  type: QuizActions.CLEAR_ALL,
});

export const updateCurrentQuestion = (
  currentQuestion: number,
  isCorrect: boolean
): QuizType => ({
  type: QuizActions.UPDATE_CURRENT_QUESTION,
  payload: {
    currentQuestion,
    isCorrect,
  },
});
