import { StyleSheet } from "react-native";
import { moderateScale } from "utils/scale";

const styles = StyleSheet.create({
  answerOption: {
    borderWidth: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 16,
    borderColor: "white",
    padding: 8,
    marginBottom: 16,
  },
  answerOptionText: {
    flex: 1,
    color: "white",
    fontSize: moderateScale(18),
  },
});

export default styles;
