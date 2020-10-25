import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducer from "./app/reducer";
import quizReducer from "./quiz/reducer";
import quizSaga from "./quiz/saga";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  app: appReducer,
  quiz: quizReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(quizSaga);

export default store;
