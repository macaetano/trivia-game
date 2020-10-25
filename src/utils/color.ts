import { ColorSchemeName } from "react-native-appearance";

export default (theme: ColorSchemeName) => {
  if (theme == "dark") {
    return {
      PRIMARY_COLOR: "#58a4b0",
      PRIMARY_COLOR_SHADE: "#333",
      RED: "#d64933",
      GREEN: "#95e06c",
      BACKGROUND: "#2b303a",
      TEXT: "#FAFAFA",
    };
  } else {
    return {
      PRIMARY_COLOR: "#3772FF",
      PRIMARY_COLOR_SHADE: "#333",
      RED: "#FF6B6B",
      GREEN: "#4FB477",
      BACKGROUND: "#F7FFF7",
      TEXT: "#2b303a",
    };
  }
};
