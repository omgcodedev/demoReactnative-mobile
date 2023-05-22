import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Input from "../../components/shared/input";
import { useTabNavigation } from "../../hooks/navigation";
import { Routes } from "../../navigation/routes";
import { AuthServiceContext } from "../../utils/services/service/authervice";

const CodeVerification = (): JSX.Element => {
  const navigation = useTabNavigation();
  const route = useRoute();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [codeInput, setCodeInput] = useState<string>("");
  const authService = useContext(AuthServiceContext);

  const codeValidation = async () => {
    const res = await authService.checkVerificationCode(
      codeInput,
      //@ts-ignore
      route.params?.email
    );
    if (res?.success) {
      navigation.navigate(Routes.NEW_PASSWORD, {
        id: null,
        //@ts-ignore
        email: route.params?.email,
      });
    } else {
      setErrorMessage(res?.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.description}>Check code in email.</Text>
      <View style={styles.sendForm}>
        <Input
          handleChange={setCodeInput}
          label="Code"
          placeholder="Enter your code"
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
      <View onTouchEnd={codeValidation} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </View>
    </View>
  );
};

export default CodeVerification;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 65,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#ffffff",
    height: "100%",
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 11,
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
