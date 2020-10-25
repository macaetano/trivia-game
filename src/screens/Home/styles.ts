import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/scale";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: moderateScale(28),
    textAlign: "center",
    fontWeight: "bold",
  },
  presentedText: {
    fontSize: moderateScale(22),
    textAlign: "center",
    marginTop: 32,
  },
  scoreText: {
    fontSize: moderateScale(22),
    textAlign: "center",
  },
});

export default styles;
