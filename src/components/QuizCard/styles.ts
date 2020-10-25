import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/scale";

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    padding: 16,
    elevation: 1,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.5,
    justifyContent: "space-between",
  },
  categoryText: {
    color: "white",
    textAlign: "center",
    fontSize: moderateScale(18),
  },
  questionText: {
    color: "white",
    fontSize: moderateScale(24),
    textAlign: "center",
    marginVertical: 16,
  },
});

export default styles;
