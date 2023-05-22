import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";
import { AuthServiceContext } from "../../../utils/services/service/authervice";

const ForgotPassword = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const navigation = useTabNavigation();

  const authService = useContext(AuthServiceContext);

  const handleSendCode = async () => {
    try {
      const res = await authService.sendRecoverPasswordEmail(emailInput);
      if (res?.success) {
        navigation.navigate(Routes.CODE_VALIDATION, {
          id: null,
          email: emailInput,
        });
      } else {
        setErrorMessage(res?.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <Text style={styles.description}>
        Enter your account Email . We’ll send you a link to recover your
        account.
      </Text>
      <View style={styles.sendForm}>
        <Text style={styles.sendFormText}>Enter Email</Text>
        <TextInput
          style={styles.fields}
          placeholder="Enter Email"
          placeholderTextColor="#A9A9A9"
          onChangeText={setEmailInput}
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
      <View onTouchEnd={handleSendCode} style={styles.button}>
        <Text style={styles.buttonText}>Send Email</Text>
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
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 35,
    color: "#151515",
  },
  errorMessage: {
    color: "#ff0000",
    fontSize: 12,
    fontWeight: "500",
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
    marginTop: 24,
    marginBottom: 30,
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 11,
    paddingHorizontal: 124,
    backgroundColor: "#8A182A",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
  emailSent: {
    marginTop: 20,
  },
});
