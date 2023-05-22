import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ForgotPassword from "../../components/features/forgotPassword";

const RecoverPassword = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ForgotPassword />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default RecoverPassword;
