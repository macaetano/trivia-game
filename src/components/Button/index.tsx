import React from "react";

import { Props } from "./types";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";
import getColors from "./../../utils/color";
import { useColorScheme, Appearance } from "react-native-appearance";

const Button: React.FunctionComponent<Props> = ({ title, onPress }) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: colors.PRIMARY_COLOR,
          shadowColor: colors.PRIMARY_COLOR_SHADE,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
