import { StyleSheet } from "react-native";
import { moderateScale } from "../../utils/scale";

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    padding: 16,
    borderRadius: 16,
    width: "100%",
    alignItems: "center",
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontSize: moderateScale(18),
  },
});

export default styles;
