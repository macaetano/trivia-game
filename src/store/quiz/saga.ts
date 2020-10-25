import { put, call, takeLatest, all } from "redux-saga/effects";
import { hideLoading, showLoading } from "../app/action-creators";
import { QuizActions } from "./action";
import { fetchQuestionsSuccess } from "./action-creators";

function* fetchQuestionsSaga() {
  try {
    const url =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
    yield put(showLoading());
    const response = yield call(fetch, url);
    const payload = yield call([response, "json"]);
    if (payload.results.length > 0) {
      yield put(fetchQuestionsSuccess(payload.results));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(hideLoading());
  }
}

function* quizSaga() {
  yield all([takeLatest(QuizActions.FETCH_QUESTIONS, fetchQuestionsSaga)]);
}

export default quizSaga;
