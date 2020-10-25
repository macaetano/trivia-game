import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const guidelineBaseWidth = 350;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, moderateScale };
