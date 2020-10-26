import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { Props } from "./types";
import styles from "./styles";

const Option: React.FunctionComponent<Props> = ({
  isSelect,
  onSelectOption,
  option,
}) => {
  const getCurrentIcon = () =>
    isSelect
      ? require("../../../assets/radio-checked.png")
      : require("../../../assets/radio.png");
  return (
    <TouchableOpacity
      onPress={() => onSelectOption()}
      style={styles.answerOption}
    >
      <Text style={styles.answerOptionText}>{option}</Text>
      <Image source={getCurrentIcon()} />
    </TouchableOpacity>
  );
};

export default Option;
