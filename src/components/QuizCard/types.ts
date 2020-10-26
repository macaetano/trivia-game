import { Answer } from "screens/Question";
import { Question } from "store/quiz/types";

export interface Props {
  onSelectAnswer: (answer: Answer) => void;
  currentAnswer: Answer;
  currentQuestion: Question;
}
