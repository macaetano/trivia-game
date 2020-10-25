import React, { Suspense, useEffect, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store/types";
import getColors from "../../utils/color";
import { moderateScale } from "../../utils/scale";
import { useColorScheme, Appearance } from "react-native-appearance";

const AnimatedScore: React.FunctionComponent = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const score = useSelector((state: ReduxState) => state.quiz.score);
  const [scoreState, setScoreState] = useState(0);
  const animatedColor = useRef(new Animated.Value(0)).current;
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (score > 0) {
      Animated.sequence([
        Animated.timing(animatedColor, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(animated, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.delay(500),
        Animated.timing(animated, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(animatedColor, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setScoreState(score);
      });
    } else setScoreState(score);
  }, [score]);

  let width;

  if (animated) {
    width = animated.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 50, 100],
    });
  }

  return (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <Animated.Text
        style={{
          color: animatedColor.interpolate({
            inputRange: [0, 1],
            outputRange: [colors.TEXT, colors.GREEN],
          }),
          backgroundColor: colors.BACKGROUND,
          alignSelf: "flex-start",
          zIndex: 1,
          fontSize: moderateScale(18),
          marginRight: 8,
        }}
      >
        Score: {scoreState}
      </Animated.Text>
      <Animated.View
        style={{
          position: "absolute",
          left: width,
          zIndex: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Text style={{ color: colors.GREEN, fontSize: moderateScale(14) }}>
          + 1
        </Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedScore;
