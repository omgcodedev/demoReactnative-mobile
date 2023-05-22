import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button } from "react-native";
import { useTabNavigation } from "../../hooks/navigation";
import { AuthContext } from "../../contexts/authContext";
import Input from "../../components/shared/input";
import Checkbox from "../../components/shared/checkbox";
import { Routes } from "../../navigation/routes";
import GoogleIcon from "../../assets/icons/googleIcon.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";
import { AuthServiceContext } from "../../utils/services/service/authervice";
import {
  ErrorState,
  handleValidation,
  isValidEmail,
} from "../../utils/validation";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<ErrorState>({
    emailError: "",
    passwordError: "",
    error: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isAgreementTurnedOn, setIsAgreementTurnedOn] =
    useState<boolean>(false);

  const navigation = useTabNavigation();
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const authService = useContext(AuthServiceContext);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage((state) => ({
        ...state,
        passwordError: "Passwords do not match",
        emailError: "",
      }));
      return;
    }

    try {
      const res = await authService.signup(email, password);
      setErrorMessage((state) => ({
        ...state,
        passwordError: res.error,
      }));

      if (!res.success) {
        setErrorMessage((state) => ({
          ...state,
          emailError: res.error,
        }));
      }

      setAuthenticated(res?.success);
    } catch (err) {
      setMessage(err)
      console.error(err);
    }
  };

  const handleGoogleAuth = () => {};

  const handleFacebookAuth = () => {};

  useEffect(() => {
    if (authenticated) navigation.navigate(Routes.HOME_STACK);
  }, [authenticated]);

  useEffect(() => {
    if (password.length) {
      handleValidation(password, setErrorMessage);
    }
  }, [password]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.title}>{message}</Text>
        <Input
          handleChange={setEmail}
          label="Email"
          placeholder="Enter your email"
        />
        {errorMessage.error && (
          <Text style={styles.errorMessage}>{errorMessage.error}</Text>
        )}
        {errorMessage.emailError && (
          <Text style={styles.errorMessage}>{errorMessage.emailError}</Text>
        )}
        <Input
          handleChange={setPassword}
          label="Password"
          placeholder="Enter your password"
          isPassword={true}
        />
        {errorMessage.passwordError && (
          <Text style={styles.errorMessage}>{errorMessage.passwordError}</Text>
        )}
        <Input
          handleChange={setConfirmPassword}
          label="Confirm Password"
          placeholder="Enter your password"
          isPassword={true}
        />
        <View style={styles.signupActions}>
          <Checkbox
            onPress={() => setIsAgreementTurnedOn(!isAgreementTurnedOn)}
            selected={isAgreementTurnedOn}
            showText={false}
            boxStyles={styles.checkbox}
          />
          <Text style={styles.rememberMeTxt}>I agree to</Text>
          <Text style={styles.termsConditions}>Terms and Conditions</Text>
        </View>
        <TouchableOpacity
          onPress={handleSignup}
          style={styles.signupBtnContainer}
        >
          <Text style={styles.signupBtn}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.lines}>
          <View style={styles.line} />
          <Text style={styles.orTxt}>or</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.authBtns}>
          <TouchableOpacity
            onPress={handleGoogleAuth}
            style={styles.authContainer}
          >
            <GoogleIcon />
            <Text style={styles.authTitle}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFacebookAuth}
            style={styles.authContainer}
          >
            <FacebookIcon />
            <Text style={styles.authTitle}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomActions}>
        <Text style={styles.hint}>Already have an account ?</Text>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate(Routes.LOGIN)}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 50,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
  },
  signupActions: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 5,
  },
  rememberMeContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },
  rememberMeTxt: {
    fontSize: 14,
    fontWeight: "500",
  },
  termsConditions: {
    color: "#8a182a",
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 3,
  },
  signupBtnContainer: {
    width: "100%",
    height: 45,
    backgroundColor: "#8a182a",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  signupBtn: {
    color: "white",
    fontWeight: "500",
    fontSize: 17,
  },
  lines: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  line: {
    borderBottomWidth: 0.5,
    height: 0,
    width: "100%",
  },
  orTxt: {
    marginHorizontal: 12,
    fontWeight: "600",
    fontSize: 14,
  },
  authBtns: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  authContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bcbec0",
    borderRadius: 5,
    height: 45,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  authTitle: {
    fontSize: 14,
    marginLeft: 10,
  },
  bottomActions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
  hint: {
    color: "#999ea1",
    fontSize: 14,
    fontWeight: "600",
  },
  errorMessage: {
    color: "#ff0000",
    fontSize: 12,
    fontWeight: "500",
  },
  signUpText: {
    color: "#8a182a",
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 14,
  },
});

export default Signup;
