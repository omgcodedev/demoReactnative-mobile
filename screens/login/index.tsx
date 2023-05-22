import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTabNavigation } from "../../hooks/navigation";
import { AuthContext } from "../../contexts/authContext";
import { Routes } from "../../navigation/routes";
import Input from "../../components/shared/input";
import Checkbox from "../../components/shared/checkbox";
import GoogleIcon from "../../assets/icons/googleIcon.svg";
import Linkedinicon from "../../assets/icons/logos_linkedin-icon.svg";
import { AuthServiceContext } from "../../utils/services/service/authervice";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isRememberSelected, setIsRememberSelected] = useState<boolean>(false);

  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const navigation = useTabNavigation();

  const authService = useContext(AuthServiceContext);

  const handleLogin = async () => {
    try {
    

      // const res = await authService.login(email, password);

      // if (res?.error) {
      //   setErrorMessage(res.error);
      //   return;
      // }

      // setAuthenticated(res?.success);

      setAuthenticated(true);

    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleAuth = () => {};

  const handleFacebookAuth = () => {};

  useEffect(() => {
    if (authenticated) navigation.navigate(Routes.HOME_STACK);
  }, [authenticated]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Input
          handleChange={setEmail}
          label="Email"
          placeholder="Enter your email"
        />
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <Input
          handleChange={setPassword}
          label="Password"
          placeholder="Enter your password"
          isPassword={true}
        />
        <View style={styles.loginActions}>
          <View style={styles.rememberMeContainer}>
            <Checkbox
              onPress={() => setIsRememberSelected(!isRememberSelected)}
              selected={isRememberSelected}
              showText={false}
              boxStyles={styles.checkbox}
            />
            <Text style={styles.rememberMeTxt}>Remember Me</Text>
          </View>
          <Text
            onPress={() => navigation.navigate(Routes.RECOVER_PASSWORD)}
            style={styles.forgotPasswordTxt}
          >
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginBtnContainer}
        >
          <Text style={styles.loginBtn}>Login</Text>
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
            <Linkedinicon />
            <Text style={styles.authTitle}>Linkedin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomActions}>
        <Text style={styles.hint}>Don`t have an account ? </Text>
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate(Routes.SIGNUP)}
        >
          Sign up
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
  loginActions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
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
  forgotPasswordTxt: {
    fontWeight: "500",
    fontSize: 14,
    color: "#8a182a",
  },
  loginBtnContainer: {
    width: "100%",
    height: 45,
    backgroundColor: "#8a182a",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  loginBtn: {
    color: "white",
    fontWeight: "500",
    fontSize: 17,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: "40%",
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
    marginTop: 75,
  },
  hint: {
    color: "#999EA1",
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

export default Login;
