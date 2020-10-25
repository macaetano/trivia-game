import { Question, QuizState } from "./types";
import { QuizActions, QuizType } from "./action";

const INITIAL_STATE: QuizState = {
  currentQuestion: 0,
  score: 0,
  questions: [],
};

const quizReducer = (state = INITIAL_STATE, action: QuizType): QuizState => {
  switch (action.type) {
    case QuizActions.UPDATE_SCORE:
      return {
        ...state,
        score: action.payload.score,
      };
    case QuizActions.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
      };
    case QuizActions.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
        questions: state.questions.map(
          (currentQuestion: Question, index: number) => {
            if (state.currentQuestion == index) {
              return {
                ...currentQuestion,
                isCorrect: action.payload.isCorrect,
              };
            } else return currentQuestion;
          }
        ),
      };
    case QuizActions.CLEAR_ALL:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default quizReducer;
