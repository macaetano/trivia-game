import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Questions from "../screens/Question";
import Result from "../screens/Result";
import Home from "../screens/Home";
import { RootStack } from "./types";

const Stack = createStackNavigator<RootStack>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Question" component={Questions} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
