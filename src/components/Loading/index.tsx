import React from "react";
import { ActivityIndicator } from "react-native";
import { useColorScheme } from "react-native-appearance";

import styles from "./style";
import getColors from "utils/color";

const Loading: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  return (
    <ActivityIndicator
      style={styles.loading}
      animating
      size="large"
      color={colors.PRIMARY_COLOR}
    />
  );
};

export default Loading;
