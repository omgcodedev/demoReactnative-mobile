import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useTabNavigation } from "../../../hooks/navigation";
import { Routes } from "../../../navigation/routes";
import { UserServiceContext } from "../../../utils/services/service/userService";
import { ErrorState, handleValidation } from "../../../utils/validation";
import Input from "../../shared/input";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPass] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<ErrorState>({
    emailError: "",
    passwordError: "",
    error: "",
  });

  const userService = useContext(UserServiceContext);
  const navigation = useTabNavigation();

  const ifConfirmedIsSame = (): void => {
    setPasswordsMatch(newPassword === reNewPassword);
  };

  useEffect(() => {
    ifConfirmedIsSame();
  }, [reNewPassword]);

  useEffect(() => {
    if (newPassword.length) {
      handleValidation(newPassword, setErrorMessage);
    }
  }, [newPassword]);

  const deleteState = () => {
    setOldPassword("");
    setNewPassword("");
    setReNewPass("");
    setPasswordsMatch(false);
    setSuccessMessage(false);
  };

  const onChangePass = async (): Promise<void> => {
    if (!passwordsMatch) {
      return;
    }
    const response = await userService.changePassword(oldPassword, newPassword);
    if (response.success) {
      setSuccessMessage(true);
      setTimeout(() => {
        deleteState()
        navigation.navigate(Routes.HOME);
      }, 3000);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.description}>
        Your new password must be different from previous used passwords.
      </Text>
      <View>
        {successMessage && (
          <Text style={styles.changeSuccess}>
            Password Has Been Changed Successfully
          </Text>
        )}
        <Input
          label="Old Password"
          placeholder="Enter Your Current Password"
          isPassword={true}
          placeholderTextColor="#D4D4D4"
          labelStyles={styles.inputLabelStyles}
          containerStyles={styles.inputContainerStyle}
          inputStyles={styles.inputStyles}
          handleChange={setOldPassword}
        />
        <Input
          label="New Password"
          placeholder="Enter Your New Password"
          isPassword={true}
          placeholderTextColor="#D4D4D4"
          labelStyles={styles.inputLabelStyles}
          containerStyles={styles.inputContainerStyle}
          inputStyles={styles.inputStyles}
          handleChange={setNewPassword}
        />
        {!!errorMessage.passwordError.length && (
          <Text style={styles.invalidPass}>{errorMessage.passwordError}</Text>
        )}
        <Input
          label="Confirm New Password"
          placeholder="Re-Enter Your New Password"
          isPassword={true}
          placeholderTextColor="#D4D4D4"
          labelStyles={styles.inputLabelStyles}
          containerStyles={styles.inputContainerStyle}
          inputStyles={styles.inputStyles}
          handleChange={setReNewPass}
        />
        {!passwordsMatch && (
          <Text style={styles.invalidPass}>Passwords Don't Match</Text>
        )}
        <View onTouchEnd={onChangePass} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
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
  description: {
    fontSize: 14,
    lineHeight: 24,
  },
  changeSuccess: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 35,
    color: "#06AA63",
    textAlign: "center",
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
  invalidPass: {
    color: "#971E31",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
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
