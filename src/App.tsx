import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./store";
import Navigation from "./navigation";
import { SafeAreaView, StatusBar } from "react-native";
import getColors from "./utils/color";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";
Appearance.getColorScheme();

const App: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  return (
    <AppearanceProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.BACKGROUND }}>
        <Provider store={store}>
          <StatusBar
            barStyle={colorScheme == "dark" ? "light-content" : "dark-content"}
          />
          <Navigation />
        </Provider>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default registerRootComponent(App);
