import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import CheckedIcon from "../../../assets/icons/checkedIcon.svg";

type CheckboxType = {
  selected: boolean;
  onPress: () => void;
  boxStyles: StyleProp<ViewStyle>;
  txtStyles?: StyleProp<TextStyle>;
  showText?: boolean;
};

const Checkbox: React.FC<CheckboxType> = ({
  selected,
  onPress,
  boxStyles,
  txtStyles,
  showText,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={boxStyles}>{selected && <CheckedIcon />}</View>
      {showText && <Text style={txtStyles}>Checkbox</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default Checkbox;
