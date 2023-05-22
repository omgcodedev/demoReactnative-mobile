import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigation/routes";

export const useTabNavigation = () => {
  return useNavigation<BottomTabNavigationProp<RootStackParamList>>();
};

export const useStackNavigation = () => {
  return useNavigation<StackNavigationProp<RootStackParamList>>();
};
