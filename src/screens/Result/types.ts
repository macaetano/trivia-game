import { StackNavigationProp } from "@react-navigation/stack";
import { RootStack } from "navigation/types";

type ProfileScreenNavigationProp = StackNavigationProp<RootStack, "Result">;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default Props;
