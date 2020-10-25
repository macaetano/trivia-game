import { Answer } from "../../screens/Question";

export interface Props {
  onSelectOption: () => void;
  isSelect: boolean;
  option: Answer;
}
