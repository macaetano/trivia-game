import { AppState } from "./types";
import { AppAction, AppTypes } from "./action";

const INITIAL_STATE: AppState = {
  isLoading: false,
};

const appReducer = (state = INITIAL_STATE, action: AppTypes): AppState => {
  switch (action.type) {
    case AppAction.SHOW_LOADING:
      return {
        isLoading: true,
      };
    case AppAction.HIDE_LOADING:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default appReducer;
