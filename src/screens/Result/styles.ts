import { StyleSheet } from "react-native";
import { moderateScale } from "utils/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scoreContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: moderateScale(24),
  },
  questionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  isCorrectText: {
    fontSize: moderateScale(18),
    marginRight: 8,
  },
  questionText: {
    flex: 1,
    fontSize: moderateScale(16),
  },
});

export default styles;
