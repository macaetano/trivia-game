import { AppState } from "./app/types";
import { QuizState } from "./quiz/types";

export interface ReduxState {
  app: AppState;
  quiz: QuizState;
}
