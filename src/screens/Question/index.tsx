import React, { useEffect, useRef, useState } from "react";

// components
import { Text, View } from "react-native";
import AnimatedScore from "../../components/AnimatedScore/";
import QuizCard from "./../../components/QuizCard";

// utils
import { useDispatch, useSelector } from "react-redux";
import { moderateScale } from "../../utils/scale";
import {
  fetchQuestions,
  updateCurrentQuestion,
  updateScore,
} from "../../store/quiz/action-creators";
import styles from "./styles";

// types
import { ReduxState } from "../../store/types";
import Props from "./types";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import getColors from "./../../utils/color";
import { useColorScheme, Appearance } from "react-native-appearance";

export type Answer = "True" | "False";

const Question: React.FunctionComponent<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  // states
  const [answer, setAnswer] = useState<Answer>("True");

  // redux
  const { currentQuestion: index, questions, score } = useSelector(
    (state: ReduxState) => state.quiz
  );
  const isLoading = useSelector((state: ReduxState) => state.app.isLoading);
  const dispatch = useDispatch();

  const currentQuestion = questions[index];
  const checkAnswer = () => {
    if (currentQuestion) {
      if (index < 9) {
        const isCorrect = currentQuestion.correct_answer == answer;
        if (isCorrect) {
          dispatch(updateScore(score + 1));
        }
        dispatch(updateCurrentQuestion(index + 1, isCorrect));
        setAnswer("True");
      } else {
        navigation.navigate("Result");
      }
    }
  };

  // effects
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchQuestions());
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={[{ backgroundColor: colors.BACKGROUND }, styles.container]}>
      <AnimatedScore />
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading ? (
          <Loading />
        ) : (
          <View>
            <QuizCard
              currentAnswer={answer}
              currentQuestion={currentQuestion}
              onSelectAnswer={setAnswer}
            />
            <View style={{ justifyContent: "center" }}>
              <View style={{ padding: 16, alignItems: "center" }}>
                <Text
                  style={{ fontSize: moderateScale(18), color: colors.TEXT }}
                >
                  {index + 1} of 10
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <Button title={index < 9 ? "Confirm" : "Finish"} onPress={checkAnswer} />
    </View>
  );
};

export default Question;
