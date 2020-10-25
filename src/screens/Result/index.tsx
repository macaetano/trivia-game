import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { clearAll } from "../../store/quiz/action-creators";
import { Question } from "../../store/quiz/types";
import { ReduxState } from "../../store/types";
import { moderateScale } from "../../utils/scale";
import Props from "./types";
import decodeHTMLEntities from "./../../utils/decode";
import styles from "./styles";
import getColors from "./../../utils/color";
import { useColorScheme, Appearance } from "react-native-appearance";

const Result: React.FunctionComponent<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const { score, questions } = useSelector((state: ReduxState) => state.quiz);
  const dispatch = useDispatch();

  const getColorText = (question: Question) => {
    if (question.isCorrect) return colors.GREEN;
    else return colors.RED;
  };

  const onPressPlayAgain = () => {
    navigation.navigate("Home");
    dispatch(clearAll());
  };

  return (
    <View style={[{ backgroundColor: colors.BACKGROUND }, styles.container]}>
      <View style={styles.scoreContainer}>
        <Text style={[{ color: colors.TEXT }, styles.scoreText]}>
          You Scored
        </Text>
        <Text style={[{ color: colors.TEXT }, styles.scoreText]}>
          {score} / 10
        </Text>
      </View>
      <FlatList
        style={{ marginVertical: 16 }}
        keyExtractor={(_, index) => index + ""}
        data={questions}
        renderItem={({ item: question, index }) => (
          <View key={index} style={{ paddingVertical: 16 }}>
            <View style={styles.questionContainer}>
              <Text
                style={[
                  styles.isCorrectText,
                  {
                    color: getColorText(question),
                  },
                ]}
              >
                {question.isCorrect ? "+" : "-"}
              </Text>
              <Text
                style={[
                  styles.questionText,
                  {
                    color: getColorText(question),
                  },
                ]}
              >
                {decodeHTMLEntities(question.question)}
              </Text>
            </View>
          </View>
        )}
      />

      <Button title="Play Again?" onPress={onPressPlayAgain} />
    </View>
  );
};

export default Result;
