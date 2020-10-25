import { AppAction, AppTypes } from "./action";

export const showLoading = (): AppTypes => ({
  type: AppAction.SHOW_LOADING,
});

export const hideLoading = (): AppTypes => ({
  type: AppAction.HIDE_LOADING,
});
