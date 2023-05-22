import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";
import { UserData } from "../../../types/userData.types";
import { UserServiceContext } from "../../../utils/services/service/userService";
import { isValidEmail } from "../../../utils/validation";
import Input from "../../shared/input";

const ChangeEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<UserData>();
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [ifValidEmail, setIfValidEmail] = useState<boolean>(false);
  const navigation = useTabNavigation();
  const userService = useContext(UserServiceContext);

  const deleteState = () => {
    setEmail("");
    setSuccessMessage(false);
  };

  const onChangeEmail = async () => {
    user["email"] = email;
    const response = await userService.update(user);
    if (response.success) {
      setSuccessMessage(true);
      setTimeout(() => {
        deleteState();
        navigation.navigate(Routes.HOME);
      }, 3000);
    }
  };

  const currentUser = async () => {
    const user = await userService.getCurrentUser();
    setUser(user);
    setEmail(user["email"]);
  };

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    if (email?.length) {
      console.log("if valid: ", isValidEmail(email));
      setIfValidEmail(isValidEmail(email));
    }
  }, [email]);

  return email?.length ? (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Change Email</Text>
      {successMessage && (
        <Text style={styles.changeSuccess}>
          Your Email Has Been Changed Successfully
        </Text>
      )}
      <Input
        label="Enter your new email"
        placeholder="Enter Your Current Password"
        placeholderTextColor="#D4D4D4"
        labelStyles={styles.inputLabelStyles}
        containerStyles={styles.inputContainerStyle}
        inputStyles={styles.inputStyles}
        handleChange={(e) => setEmail(e)}
        value={email}
      />
      {!ifValidEmail && (
        <Text style={styles.invalidEmail}>Invalid Email Format</Text>
      )}
      <View onTouchEnd={onChangeEmail} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </View>
    </ScrollView>
  ) : (
    <View style={styles.pending}>
      <ActivityIndicator size="large" color="#8A182A" />
    </View>
  );
};

export default ChangeEmail;

const styles = StyleSheet.create({
  pending: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingTop: 100
  },
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    padding: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 35,
    marginBottom: 5,
    marginTop: 15,
  },
  changeSuccess: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 35,
    color: "#06AA63",
    textAlign: "center",
  },
  invalidEmail: {
    color: "#971E31",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
  },
  inputContainerStyle: {
    marginTop: 20,
  },
  inputLabelStyles: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  inputStyles: {
    height: 45,
    width: "100%",
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#C6C6C6",
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
    marginTop: 30,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
  },
});
