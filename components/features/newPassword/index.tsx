import { useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";
import { AuthServiceContext } from "../../../utils/services/service/authervice";

const ForgotPassword = (): JSX.Element => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigation = useTabNavigation();
  const authService = useContext(AuthServiceContext);
  const route = useRoute();

  const submit = async () => {
    if (newPassword == confirmPassword) {
      const res = await authService.updateForgottenPassword(
        newPassword,
        //@ts-ignore
        route.params.email
      );
      if (res.success) {
        navigation.navigate(Routes.LOGIN);
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Password</Text>
      <Text style={styles.description}>
        Your new password must be different from previous used passwords.
      </Text>
      <View style={styles.sendForm}>
        <Text style={styles.sendFormText}>Password</Text>
        <TextInput
          style={styles.fields}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="#A9A9A9"
          onChangeText={setNewPassword}
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
      <View style={styles.sendForm}>
        <Text style={styles.sendFormText}>Confirm Password</Text>
        <TextInput
          style={styles.fields}
          secureTextEntry={true}
          placeholder="Enter your password "
          placeholderTextColor="#A9A9A9"
          onChangeText={setConfirmPassword}
        />
      </View>
      <View onTouchEnd={submit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 65,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  errorMessage: {
    color: "#ff0000",
    fontSize: 12,
    fontWeight: "500",
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 35,
    color: "#151515",
  },
  description: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#151515",
  },
  sendForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  sendFormText: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#151515",
  },
  fields: {
    height: 45,
    width: "100%",
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 5,
    padding: 13,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11,
    paddingHorizontal: 124,
    backgroundColor: "#8A182A",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 32,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
});
