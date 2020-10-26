import React from "react";
import { Text, View } from "react-native";
import { useColorScheme, Appearance } from "react-native-appearance";

import decodeHTMLEntities from "utils/decode";
import Option from "components/Option";
import styles from "./styles";
import { Props } from "./types";
import getColors from "utils/color";

const QuizCard: React.FunctionComponent<Props> = ({
  currentAnswer,
  currentQuestion,
  onSelectAnswer,
}) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  if (currentQuestion)
    return (
      <View
        style={[
          {
            backgroundColor: colors.PRIMARY_COLOR,
            shadowColor: colors.PRIMARY_COLOR_SHADE,
          },
          styles.container,
        ]}
      >
        <Text style={styles.categoryText}>
          {decodeHTMLEntities(currentQuestion?.category)}
        </Text>
        <Text style={styles.questionText}>
          {decodeHTMLEntities(currentQuestion?.question)}
        </Text>
        <View>
          <Option
            option="True"
            isSelect={currentAnswer == "True"}
            onSelectOption={() => onSelectAnswer("True")}
          />
          <Option
            option="False"
            isSelect={currentAnswer == "False"}
            onSelectOption={() => onSelectAnswer("False")}
          />
        </View>
      </View>
    );
  else return <></>;
};

export default QuizCard;
