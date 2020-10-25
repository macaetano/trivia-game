import React from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import getColors from "../../utils/color";
import { useColorScheme } from "react-native-appearance";
import styles from "./styles";
import Props from "./types";

const Home: React.FunctionComponent<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);

  const onPressBegin = () => navigation.navigate("Question");

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.BACKGROUND,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.welcomeText,
            {
              color: colors.TEXT,
            },
          ]}
        >
          Welcome to the trivia Challenge!
        </Text>
        <Text
          style={[
            styles.presentedText,
            {
              color: colors.TEXT,
            },
          ]}
        >
          You will be presented with 10 True or False questions.
        </Text>
        <Text
          style={[
            styles.scoreText,
            {
              color: colors.TEXT,
            },
          ]}
        >
          Can you score 100%?
        </Text>
      </View>
      <Button title="Begin" onPress={onPressBegin} />
    </View>
  );
};

export default Home;
