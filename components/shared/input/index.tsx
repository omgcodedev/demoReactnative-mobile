import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import OpenEyeIcon from "../../../assets/icons/open-eye.svg";
import CloseEyeIcon from "../../../assets/icons/close-eye.svg";

type InputProps = {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
  placeholderTextColor?: string;
  labelStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  value?: string;
  handleChange: Dispatch<SetStateAction<string>>;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  isPassword,
  placeholderTextColor,
  labelStyles,
  containerStyles,
  inputStyles,
  value,
  handleChange,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(true);

  const handleShowPassword = () => setIsPasswordShown(!isPasswordShown);

  useEffect(() => {
    return () => {
      value = "";
    };
  });

  return (
    <View style={containerStyles ? containerStyles : styles.container}>
      <Text style={labelStyles ? labelStyles : styles.label}>{label}</Text>
      <View>
        <TextInput
          style={inputStyles ? inputStyles : styles.input}
          secureTextEntry={isPassword && isPasswordShown}
          placeholder={placeholder}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : "#A9A9A9"
          }
          onChangeText={handleChange}
        >
          {value}
        </TextInput>
        {isPassword ? (
          isPasswordShown ? (
            <CloseEyeIcon style={styles.eyeIcon} onPress={handleShowPassword} />
          ) : (
            <OpenEyeIcon style={styles.eyeIcon} onPress={handleShowPassword} />
          )
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: "100%",
  },
  input: {
    height: 45,
    width: "100%",
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 5,
    padding: 13,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: "40%",
  },
  label: {
    fontWeight: "500",
    fontSize: 14,
  },
});

export default Input;
