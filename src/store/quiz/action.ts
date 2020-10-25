import { Action } from "redux";
import { Question } from "./types";

export enum QuizActions {
  UPDATE_SCORE = "UPDATE_SCORE",
  FETCH_QUESTIONS = "FETCH_QUESTIONS",
  FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS",
  UPDATE_CURRENT_QUESTION = "UPDATE_CURRENT_QUESTION",
  CLEAR_ALL = "CLEAR_ALL",
}

export interface ClearAll extends Action<QuizActions> {
  type: typeof QuizActions.CLEAR_ALL;
}

export interface UpdateScore extends Action<QuizActions> {
  type: typeof QuizActions.UPDATE_SCORE;
  payload: {
    score: number;
  };
}

export interface FetchQuestions extends Action<QuizActions> {
  type: typeof QuizActions.FETCH_QUESTIONS;
}

export interface FetchQuestionsSuccess extends Action<QuizActions> {
  type: typeof QuizActions.FETCH_QUESTIONS_SUCCESS;
  payload: {
    questions: Question[];
  };
}

export interface UpdateCurrentQuestion extends Action<QuizActions> {
  type: typeof QuizActions.UPDATE_CURRENT_QUESTION;
  payload: {
    currentQuestion: number;
    isCorrect: boolean;
  };
}

export type QuizType =
  | UpdateScore
  | FetchQuestions
  | FetchQuestionsSuccess
  | UpdateCurrentQuestion
  | ClearAll;
