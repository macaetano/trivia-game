import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { registerRootComponent } from "expo";
import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";
import { Provider } from "react-redux";

import store from "store";
import Navigation from "navigation";
import getColors from "utils/color";

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
