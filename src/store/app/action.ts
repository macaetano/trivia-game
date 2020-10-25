import { Action } from "redux";

export enum AppAction {
  SHOW_LOADING = "SHOW_LOADING",
  HIDE_LOADING = "HIDE_LOADING",
}

export interface ShowLoading extends Action<AppAction> {
  type: typeof AppAction.SHOW_LOADING;
}

export interface HideLoading extends Action<AppAction> {
  type: typeof AppAction.HIDE_LOADING;
}

export type AppTypes = ShowLoading | HideLoading;
